"use client";
import { useState } from "react";
import {
  CheckCircle2,
  X,
  Printer,
  MessageSquarePlus,
  Send,
} from "lucide-react";

const ACCENT = "#C1502E";
const ACCENT_STRONG = "#D94A2B";
const TEXT_DARK = "#1A1A18";
const TEXT_LABEL = "#8C8B83";
const BORDER = "rgba(231, 228, 218, 0.7)";

export default function PaymentSuccessModal({
  isOpen,
  onClose,
  details,
  onSubmitMessage,
}) {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => window.print();

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setSubmitError("Write a message before posting.");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      await onSubmitMessage(message);
      setSubmitted(true);
    } catch (err) {
      setSubmitError("Couldn't post your message. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetMessageFlow = () => {
    setShowMessageForm(false);
    setMessage("");
    setSubmitError("");
    setSubmitted(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(26,26,24,0.45)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 24px 60px rgba(26,26,24,0.28)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition hover:bg-white/60"
          style={{ color: TEXT_LABEL }}
        >
          <X className="w-4 h-4" />
        </button>

        {!showMessageForm ? (
          <div className="px-8 pt-10 pb-8">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(193,80,46,0.12)",
                  border: "1px solid rgba(193,80,46,0.25)",
                }}
              >
                <CheckCircle2
                  className="w-9 h-9"
                  style={{ color: ACCENT }}
                  strokeWidth={1.75}
                />
              </div>
            </div>

            <h2
              className="text-center text-xl mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: TEXT_DARK,
              }}
            >
              Payment successful
            </h2>

            <dl className="space-y-2.5 text-sm">
              <Row label="Payment type" value={details?.paymentType} />
              <Row label="Bank" value={details?.bank} />
              <Row label="Mobile" value={details?.mobile} />
              <Row label="Email" value={details?.email} />
              <div
                style={{ borderTop: `1px dashed ${BORDER}` }}
                className="pt-2.5 mt-1"
              >
                <Row
                  label="Amount paid"
                  value={`₹${Number(details?.amount || 0).toLocaleString("en-IN")}`}
                  bold
                />
              </div>
              <Row label="Transaction ID" value={details?.transactionId} mono />
            </dl>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-full border py-2.5 text-sm font-semibold transition"
                style={{
                  borderColor: ACCENT,
                  color: ACCENT,
                  background: "rgba(255,255,255,0.5)",
                }}
              >
                <Printer className="w-3.5 h-3.5" /> Print
              </button>
              <button
                onClick={onClose}
                className="flex-1 rounded-full py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: ACCENT_STRONG }}
              >
                Close
              </button>
            </div>

            <button
              onClick={() => setShowMessageForm(true)}
              className="w-full flex items-center justify-center gap-2 mt-3 rounded-full border border-dashed py-2.5 text-sm font-semibold transition hover:bg-white/50"
              style={{ borderColor: "rgba(193,80,46,0.45)", color: ACCENT }}
            >
              <MessageSquarePlus className="w-4 h-4" /> Add a message to the
              community
            </button>
          </div>
        ) : (
          <div className="px-8 pt-10 pb-8">
            {!submitted ? (
              <>
                <h2
                  className="text-center text-xl mb-1"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: TEXT_DARK,
                  }}
                >
                  Share a message
                </h2>
                <p
                  className="text-center text-xs mb-5"
                  style={{ color: TEXT_LABEL }}
                >
                  Your ₹{Number(details?.amount || 0).toLocaleString("en-IN")}{" "}
                  donation, with a note for the community.
                </p>

                <form onSubmit={handleSubmitMessage}>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setSubmitError("");
                    }}
                    rows={4}
                    maxLength={280}
                    placeholder="Say something encouraging…"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: `1px solid ${BORDER}`,
                      color: TEXT_DARK,
                    }}
                  />
                  <div className="flex items-center justify-between mt-1.5 mb-4">
                    <span
                      className="text-xs"
                      style={{ color: submitError ? ACCENT : TEXT_LABEL }}
                    >
                      {submitError || `${message.length}/280`}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={resetMessageFlow}
                      className="flex-1 rounded-full border py-2.5 text-sm font-semibold transition"
                      style={{
                        borderColor: BORDER,
                        color: TEXT_DARK,
                        background: "rgba(255,255,255,0.5)",
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-semibold text-white transition disabled:opacity-60"
                      style={{ background: ACCENT_STRONG }}
                    >
                      {submitting ? (
                        "Posting…"
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" /> Post
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(193,80,46,0.12)" }}
                  >
                    <CheckCircle2
                      className="w-8 h-8"
                      style={{ color: ACCENT }}
                    />
                  </div>
                </div>
                <h3
                  className="text-lg mb-1"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: TEXT_DARK,
                  }}
                >
                  Message posted
                </h3>
                <p className="text-sm mb-6" style={{ color: TEXT_LABEL }}>
                  Thanks for sharing — it'll show up on the community wall
                  shortly.
                </p>
                <button
                  onClick={onClose}
                  className="w-full rounded-full py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: ACCENT_STRONG }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value, bold, mono }) {
  return (
    <div className="flex items-center justify-between">
      <dt style={{ color: TEXT_LABEL, fontSize: 12.5 }}>{label}</dt>
      <dd
        style={{
          color: TEXT_DARK,
          fontWeight: bold ? 700 : 500,
          fontFamily: mono
            ? "ui-monospace, SFMono-Regular, monospace"
            : undefined,
          fontSize: bold ? 15 : 13,
        }}
      >
        {value || "—"}
      </dd>
    </div>
  );
}
