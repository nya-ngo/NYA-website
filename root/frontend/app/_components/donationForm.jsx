"use client";
import { useState, useEffect } from "react";
import { Check, Lock } from "lucide-react";
import PaymentSuccessModal from "./donationSuccessPage";

const ORG_NAME = "NYA Organization";
const PRESET_AMOUNTS = [500, 1000, 2000, 5000];

export default function DonationForm() {
  const [frequency, setFrequency] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [showCustom, setShowCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [messagePosted, setMessagePosted] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    if (window.Razorpay) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptReady(true);
    script.onerror = () =>
      setErrors((prev) => ({
        ...prev,
        form: "Couldn't load the payment gateway. Check your connection and reload.",
      }));
    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("donarData");
    console.log(data);
    if (data) {
      const donarData = JSON.parse(data);
      setFields({
        name: donarData.name || "",
        email: donarData.email || "",
        phone: donarData.phone || "",
        pan: donarData.pan || "",
      });
    }
  }, []);
  const amount = showCustom ? Number(customAmount) : selectedAmount;

  const pickPreset = (val) => {
    setShowCustom(false);
    setSelectedAmount(val);
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const pickCustom = () => {
    setShowCustom(true);
    setSelectedAmount(null);
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const updateField = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };
  const handleCommunityMessage = async (text) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/post`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phonenumber: fields.phone,
          pancard: fields.pan,
          amount: amount,
          message: text,
          payment_status: "success",
          order_id: receiptDetails.order_id,
          payment_id: receiptDetails.transactionId,
        }),
      },
    );
    if (!res.ok) throw new Error("Failed to post message");
    setMessagePosted(true);
    return res.json();
  };
  const handleReceiptClose = async () => {
    if (!messagePosted && receiptDetails) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fields.name,
            email: fields.email,
            phonenumber: fields.phone,
            pancard: fields.pan,
            amount: amount,
            message: "",
            payment_status: "success",
            order_id: receiptDetails.order_id,
            payment_id: receiptDetails.transactionId,
          }),
        });
      } catch (err) {
        console.error("Error logging skipped message:", err);
      }
    }
    setShowReceipt(false);
  };
  const validate = () => {
    const next = {};
    if (!fields.name.trim()) next.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(fields.phone))
      next.phone = "Enter a valid 10-digit mobile number";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(fields.pan))
      next.pan = "Format: ABCDE1234F";
    if (!amount || amount < 1) next.amount = "Select or enter an amount";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!scriptReady || !window.Razorpay) {
      setErrors((prev) => ({
        ...prev,
        form: "Payment gateway is still loading — try again in a moment.",
      }));
      return;
    }

    setProcessing(true);
    localStorage.setItem(
      "donarData",
      JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        pan: fields.pan,
        amount: amount,
      }),
    );
    setErrors((prev) => ({ ...prev, form: "" }));
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/create-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          panNumber: fields.pan,
          amount: amount,
        }),
      },
    );
    const data = await res.json();
    console.log("Order creation response:", data);
    const options = {
      key: "rzp_live_TM4ufHVlVqlasn",
      amount: amount * 100,
      currency: "INR",
      name: ORG_NAME,
      description: `${frequency === "monthly" ? "Monthly" : "Yearly"} donation`,
      order_id: res.order_id,
      prefill: {
        name: fields.name,
        email: fields.email,
        contact: fields.phone,
      },
      notes: {
        pan: fields.pan,
        frequency,
      },
      theme: { color: "#C1502E" },
      modal: {
        ondismiss: () => setProcessing(false),
      },
      handler: async (response) => {
        setProcessing(false);
        setMessagePosted(false);
        setReceiptDetails({
          paymentType: response.method,
          bank: data.bank,
          mobile: fields.phone,
          email: fields.email,
          amount: amount,
          transactionId: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
        });
        setShowReceipt(true);
        
        console.log("Payment successful:", response);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => {
      setProcessing(false);
      setErrors((prev) => ({
        ...prev,
        form: "The payment did not go through. Please try again.",
      }));
    });
    rzp.open();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF9F4]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white lg:rounded-2xl border border-[#E7E4DA] shadow-sm p-8"
      >
        <p className="text-xs font-semibold tracking-widest text-[#C1502E] uppercase mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-[#C1502E]" />
          Support the cause
        </p>
        <h1
          className="text-3xl text-[#1A1A18] mb-1"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Make a donation
        </h1>
        <p className="text-[#6B6A63] text-sm mb-6">
          Choose how often you'd like to give.
        </p>

        {/* Frequency */}
        {/* <div
          role="radiogroup"
          aria-label="Donation frequency"
          className="flex bg-[#F4F1EA] rounded-full p-1 mb-6"
        >
          {["monthly", "yearly"].map((f) => (
            <label key={f} className="flex-1">
              <input
                type="radio"
                name="frequency"
                value={f}
                checked={frequency === f}
                onChange={() => setFrequency(f)}
                className="sr-only"
              />
              <span
                className={`block text-center text-sm font-medium py-2 rounded-full cursor-pointer transition ${
                  frequency === f
                    ? "bg-[#C1502E] text-white shadow-sm"
                    : "text-[#6B6A63] hover:text-[#1A1A18]"
                }`}
              >
                {f === "monthly" ? "Monthly" : "Yearly"}
              </span>
            </label>
          ))}
        </div> */}

        {/* Amount */}
        <p className="text-xs font-semibold tracking-widest text-[#8C8B83] uppercase mb-3">
          Amount
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {PRESET_AMOUNTS.map((val) => {
            const active = !showCustom && selectedAmount === val;
            return (
              <button
                type="button"
                key={val}
                onClick={() => pickPreset(val)}
                aria-pressed={active}
                className={`relative rounded-xl border py-3 text-sm font-semibold transition hover:scale-[1.02] ${
                  active
                    ? "bg-[#C1502E] border-[#C1502E] text-white shadow-sm"
                    : "bg-white border-[#E7E4DA] text-[#1A1A18] hover:border-[#C1502E]"
                }`}
              >
                ₹{val.toLocaleString("en-IN")}
                {active && (
                  <span className="absolute -top-2 -right-2 bg-[#1A1A18] rounded-full p-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={pickCustom}
          aria-pressed={showCustom}
          className={`w-full rounded-xl border py-3 text-sm font-semibold transition mb-2 ${
            showCustom
              ? "bg-[#C1502E] border-[#C1502E] text-white shadow-sm"
              : "bg-white border-[#E7E4DA] text-[#1A1A18] hover:border-[#C1502E]"
          }`}
        >
          Enter a custom amount
        </button>
        {showCustom && (
          <div className="mb-2">
            <div className="flex items-center rounded-xl border border-[#E7E4DA] focus-within:border-[#C1502E] focus-within:ring-2 focus-within:ring-[#C1502E]/15 overflow-hidden bg-white">
              <span className="px-3 text-[#8C8B83] text-sm">₹</span>
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(e) =>
                  setCustomAmount(e.target.value.replace(/\D/g, ""))
                }
                placeholder="Enter amount"
                className="flex-1 py-2.5 pr-4 text-[#1A1A18] outline-none bg-transparent"
              />
            </div>
          </div>
        )}
        {errors.amount && (
          <p className="text-[#C1502E] text-xs mb-2">{errors.amount}</p>
        )}

        {/* Details */}
        <p className="text-xs font-semibold tracking-widest text-[#8C8B83] uppercase mt-6 mb-3">
          Your details
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold tracking-wide text-[#8C8B83] uppercase mb-1.5">
              Full name
            </label>
            <input
              type="text"
              value={fields.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Enter full name"
              className="w-full rounded-xl border border-[#E7E4DA] px-4 py-2.5 text-[#1A1A18] placeholder-[#B7B5AB] focus:border-[#C1502E] focus:ring-2 focus:ring-[#C1502E]/15 outline-none transition"
            />
            {errors.name && (
              <p className="text-[#C1502E] text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide text-[#8C8B83] uppercase mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={fields.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="test@mail.com"
              className="w-full rounded-xl border border-[#E7E4DA] px-4 py-2.5 text-[#1A1A18] placeholder-[#B7B5AB] focus:border-[#C1502E] focus:ring-2 focus:ring-[#C1502E]/15 outline-none transition"
            />
            {errors.email && (
              <p className="text-[#C1502E] text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide text-[#8C8B83] uppercase mb-1.5">
              Phone number
            </label>

            <div className="flex h-[42px] rounded-xl border border-[#E7E4DA] focus-within:border-[#C1502E] focus-within:ring-2 focus-within:ring-[#C1502E]/15 overflow-hidden bg-white">
              <div className="w-[64px] shrink-0 flex flex-col items-center justify-center border-r border-[#E7E4DA]">
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm text-[#1A1A18]">+91</span>
                </div>
              </div>

              <input
                type="tel"
                inputMode="numeric"
                value={fields.phone}
                onChange={(e) =>
                  updateField(
                    "phone",
                    e.target.value.replace(/\D/g, "").slice(0, 10),
                  )
                }
                placeholder="9876543210"
                className="flex-1 min-w-0 px-4 py-2.5 text-[#1A1A18] placeholder-[#B7B5AB] outline-none bg-transparent"
              />
            </div>

            {errors.phone && (
              <p className="text-[#C1502E] text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide text-[#8C8B83] uppercase mb-1.5">
              PAN number
            </label>
            <input
              type="text"
              value={fields.pan}
              onChange={(e) =>
                updateField(
                  "pan",
                  e.target.value
                    .replace(/[^a-zA-Z0-9]/g, "")
                    .toUpperCase()
                    .slice(0, 10),
                )
              }
              placeholder="ABCDE1234F"
              className="w-full rounded-xl border border-[#E7E4DA] px-4 py-2.5 text-[#1A1A18] placeholder-[#B7B5AB] uppercase focus:border-[#C1502E] focus:ring-2 focus:ring-[#C1502E]/15 outline-none transition"
            />
            {errors.pan ? (
              <p className="text-[#C1502E] text-xs mt-1">{errors.pan}</p>
            ) : (
              <p className="text-[#8C8B83] text-xs mt-1">
                Used to issue your 80G tax receipt
              </p>
            )}
          </div>
        </div>

        {errors.form && (
          <div className="mt-4 bg-[#FBF3EC] border border-[#C1502E]/30 text-[#C1502E] text-sm rounded-lg p-3">
            {errors.form}
          </div>
        )}

        <button
          type="submit"
          disabled={processing}
          className="w-full mt-6 rounded-full bg-[#D94A2B] hover:bg-[#C1502E] text-white font-semibold py-3.5 shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {processing
            ? "Opening secure checkout…"
            : `Donate ₹${(amount || 0).toLocaleString("en-IN")} `}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-[#8C8B83] mt-3">
          <Lock className="w-3 h-3" /> Payments processed securely by Razorpay
        </p>
      </form>
      <PaymentSuccessModal
        isOpen={showReceipt}
        onClose={handleReceiptClose}
        details={receiptDetails}
        onSubmitMessage={handleCommunityMessage}
      />
    </div>
  );
}
