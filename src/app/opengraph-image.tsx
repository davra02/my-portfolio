import { ImageResponse } from "next/og";

export const alt = "David Reyes Alés — Ingeniero de Software Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#090d12",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent glow — radial gradient, satori no soporta blur */}
        <div
          style={{
            position: "absolute",
            top: "-260px",
            right: "-220px",
            width: "760px",
            height: "760px",
            background:
              "radial-gradient(circle, rgba(59,126,232,0.22) 0%, rgba(59,126,232,0.10) 45%, rgba(9,13,18,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "8px",
            color: "#768799",
            textTransform: "uppercase",
          }}
        >
          Backend · Sistemas distribuidos · MSc UC3M
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", marginTop: 28 }}>
          <div style={{ display: "flex", fontSize: 116, fontWeight: 700, color: "#dae2ec" }}>
            David Reyes
          </div>
          <div style={{ display: "flex", fontSize: 116, fontWeight: 700, color: "#3b7ee8" }}>
            .
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: 24 }}>
          <div style={{ display: "flex", width: 56, height: 3, background: "#3b7ee8" }} />
          <div style={{ display: "flex", fontSize: 34, color: "#dae2ec", marginLeft: 20 }}>
            Ingeniero de Software Backend
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#768799",
            marginTop: 32,
            maxWidth: "820px",
            lineHeight: 1.5,
          }}
        >
          Plataformas en tiempo real y servicios backend para entornos operativos.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#3b7ee8",
            marginTop: "auto",
          }}
        >
          www.davidreyesales.com
        </div>
      </div>
    ),
    size,
  );
}
