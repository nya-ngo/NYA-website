"use client";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import { Check, Lock } from "lucide-react";
const RAZORPAY_KEY = "rzp_live_TM4ufHVlVqlasn";
const ORG_NAME = "Your Organization";
const PRESET_AMOUNTS = [500, 1000, 2000, 5000];

export default function DonationForm() {
  const [frequency, setFrequency] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [showCustom, setShowCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
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
    setErrors((prev) => ({ ...prev, form: "" }));
    const res=await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-order`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:fields.name,
        email:fields.email,
        phone:fields.phone,
        panNumber:fields.pan,
        amount:amount * 100
      })
    })
    const options = {
      key: RAZORPAY_KEY,
      amount: amount * 100, 
      currency: "INR",
      name: ORG_NAME,
      description: `${frequency === "monthly" ? "Monthly" : "Yearly"} donation`,
      order_id:res.order_id, 
      prefill: {
        name: fields.name,
        email: fields.email,
        contact: fields.phone,
      },
      notes: {
        pan: fields.pan,
        frequency,
      },
      theme: { color: "#065f46" },
      modal: {
        ondismiss: () => setProcessing(false),
      },
      handler: async (response) => {
        setProcessing(false);
        try{
          const verifyRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-payment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              order_id:res.order_id,
              name:fields.name,
              email:fields.email,
              phone:fields.phone,
              panNumber:fields.pan,
              amount:amount * 100
             }),
          }); 
        console.log("Payment verification response:", verifyRes);
        }catch(err){
          console.error("Error verifying payment:", err);
        }
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
    <div className="min-h-screen w-full  flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white lg:rounded-3xl shadow-3xl  p-8"
      >
        <p className="text-xs font-semibold tracking-wide text-black-600 uppercase mb-2">
          Support the cause
        </p>
        <h1 className="font-serif text-3xl text-red-600 mb-1">
          Make a donation
        </h1>
        <p className="text-stone-500 text-sm mb-6">
          Choose how often you'd like to give.
        </p>

        {/* Frequency */}
        <div
          role="radiogroup"
          aria-label="Donation frequency"
          className="flex bg-stone-100 rounded-full p-1 mb-6"
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
                    ? "bg-emerald-900 text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {f === "monthly" ? "Monthly" : "Yearly"}
              </span>
            </label>
          ))}
        </div>

        {/* Amount */}
        <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase mb-3">
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
                className={`relative rounded-xl border py-3 text-sm font-semibold transition hover:scale-105 ${
                  active
                    ? "bg-emerald-900 border-emerald-900 text-white shadow-sm"
                    : "bg-white border-stone-300 text-stone-700 hover:border-emerald-700"
                }`}
              >
                ₹{val.toLocaleString("en-IN")}
                {active && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-0.5">
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
              ? "bg-emerald-900 border-emerald-900 text-white shadow-sm"
              : "bg-white border-stone-300 text-stone-700 hover:border-emerald-700"
          }`}
        >
          Enter a custom amount
        </button>
        {showCustom && (
          <div className="mb-2">
            <div className="flex items-center rounded-xl border border-stone-300 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-100 overflow-hidden">
              <span className="px-3 text-stone-500 text-sm">₹</span>
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(e) =>
                  setCustomAmount(e.target.value.replace(/\D/g, ""))
                }
                placeholder="Enter amount"
                className="flex-1 py-2.5 pr-4 text-stone-900 outline-none"
              />
            </div>
          </div>
        )}
        {errors.amount && (
          <p className="text-rose-600 text-xs mb-2">{errors.amount}</p>
        )}

        {/* Details */}
        <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase mt-6 mb-3">
          Your details
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
              Full name
            </label>
            <input
              type="text"
              value={fields.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Enter Full Name"
              className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            {errors.name && (
              <p className="text-rose-600 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={fields.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="test@mail.com"
              className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            {errors.email && (
              <p className="text-rose-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
              Phone number
            </label>
            <div className="flex rounded-xl border border-stone-300 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-100 overflow-hidden">
              <PhoneInput
                international
                defaultCountry="IN"
                value={phone}
                onChange={setPhone}
                className="w-26 p-4"
              />
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
                className="flex-1 px-4 py-2.5 text-stone-900 placeholder-stone-400 outline-none"
              />
            </div>
            {errors.phone && (
              <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">
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
              className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 uppercase focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 outline-none transition"
            />
            {errors.pan ? (
              <p className="text-rose-600 text-xs mt-1">{errors.pan}</p>
            ) : (
              <p className="text-stone-400 text-xs mt-1">
                Used to issue your 80G tax receipt
              </p>
            )}
          </div>
        </div>

        {errors.form && (
          <div className="mt-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg p-3">
            {errors.form}
          </div>
        )}

        <button
          type="submit"
          disabled={processing}
          className="w-full mt-6 rounded-xl bg-red-400 hover:bg-red-500 text-white font-semibold py-3.5 shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {processing
            ? "Opening secure checkout…"
            : `Donate ₹${(amount || 0).toLocaleString("en-IN")} ${frequency === "monthly" ? "every month" : "every year"}`}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-stone-400 mt-3">
          <Lock className="w-3 h-3" /> Payments processed securely by Razorpay
        </p>
      </form>
    </div>
  );
}
