'use client';
import { useState } from "react";


const FAQ_DATA = [
  
  {
    title: "Donations",
    items: [
      {
        question: "Is my donation tax deductible?",
        answer:
          "Yes. All donations are eligible for tax exemption under Section 80G. You will receive a receipt via email within 24 hours.",
      },
      {
        question: "Can I make a monthly recurring donation?",
        answer:
          "Yes, you can set up a monthly donation during checkout and manage or cancel it anytime from your donor dashboard.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept UPI, debit and credit cards, net banking, and digital wallets through our secure payment gateway.",
      },
      {
        question: "Is there a minimum donation amount?",
        answer:
          "There is no minimum amount. Every contribution, however small, helps us continue our work.",
      },
    ],
  }
];


const COLORS = {
  heading: "#1a5c45",     
  ctaBg: "#1a3d2e",       
  ctaButton: "#c9e35c",
  border: "#e3e1d8",      
  text: "#222",
  textMuted: "#555",
  iconLine: "#1a5c45",
};


function FAQRow({
  item,
  isOpen,
  onToggle,
}) {
  return (
    <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          textAlign: "left",
          background: "#fff",
          border: "none",
          padding: "16px 4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontFamily: "'Arial', sans-serif",
        }} 
      >
        <span style={{ fontSize: 14, color: COLORS.text, paddingRight: 16 }}>
          {item.question}
        </span>

        <span
          style={{
            width: 18,
            height: 18,
            flexShrink: 0,
            marginLeft: 14,
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 14,
              height: 1.5,
              background: COLORS.iconLine,
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: isOpen
                ? "translate(-50%, -50%) rotate(90deg)"
                : "translate(-50%, -50%) rotate(0deg)",
              width: 1.5,
              height: 14,
              background: COLORS.iconLine,
              opacity: isOpen ? 0 : 1,
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
          />
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? 200 : 0,
          overflow: "hidden",
          transition: "max-height 0.25s ease",
        }}
      >
        <div
          style={{
            padding: "0 4px 16px",
            fontSize: 13,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            fontFamily: "'Arial', sans-serif",
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

function FAQCategoryBlock({
  category,
  openKey,
  onToggle,
}) {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: COLORS.heading,
          fontSize: 24,
          fontWeight: 400,
          margin: "40px 0 18px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {category.title}
      </h2>
      <div style={{ borderBottom: `1px solid ${COLORS.border}` }}>
        {category.items.map((item, i) => {
          const key = `${category.title}-${i}`;
          return (
            <FAQRow
              key={key}
              item={item}
              isOpen={openKey === key}
              onToggle={() => onToggle(key)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function FAQSection({
  categories = FAQ_DATA,

}) {
  const [openKey, setOpenKey] = useState(null);

  return (
    <div
      style={{
        maxWidth: 680,
        margin: "0 auto",
        background: "#fff",
      }}
      className=""
    >
      <h1
        style={{
          textAlign: "center",
          color: COLORS.heading,
          fontSize: 36,
          fontWeight: 400,
          margin: "0 0 36px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        FAQ
      </h1>

      {categories.map((cat) => (
        <FAQCategoryBlock
          key={cat.title}
          category={cat}
          openKey={openKey}
          onToggle={(key) => setOpenKey(openKey === key ? null : key)}
        />
      ))}

      
    </div>
  );
}