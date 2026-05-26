import { ImageResponse } from "next/og";
import { SITE_NAME, PHONE_DISPLAY } from "@/lib/site";

export const alt =
  "Abogados de Derecho de Familia en Chile · Primera consulta gratuita";
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
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #152d4a 0%, #1e3a5f 55%, #2a4f7f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#d4a853",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 800,
              color: "#152d4a",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#e0be78", fontWeight: 700 }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "rgba(212,168,83,0.18)",
              border: "1px solid rgba(212,168,83,0.4)",
              color: "#e0be78",
              fontSize: "24px",
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: "999px",
              marginBottom: "28px",
            }}
          >
            Primera consulta gratuita
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "68px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Asesoría legal en Derecho de Familia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#cdd9ec",
              marginTop: "24px",
            }}
          >
            Divorcio · Pensión de alimentos · Cuidado personal · Chile
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", fontSize: "26px", color: "#9fb3d1" }}>
            Atención en todo Chile · Respuesta en 24 h
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 700,
              color: "#25D366",
            }}
          >
            WhatsApp {PHONE_DISPLAY}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
