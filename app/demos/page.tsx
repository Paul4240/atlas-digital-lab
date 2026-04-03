"use client";

export default function DemosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <div style={{ fontSize: "72px", fontWeight: 900, color: "red", lineHeight: 1 }}>
          NEW DEMOS PAGE
        </div>
        <div style={{ fontSize: "28px", marginTop: "20px" }}>
          IF YOU DO NOT SEE THIS, WE ARE EDITING THE WRONG FILE
        </div>
      </div>
    </main>
  );
}