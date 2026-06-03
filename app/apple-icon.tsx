import { ImageResponse } from "next/og";

// Ícono para "Agregar a pantalla de inicio" en iOS (Apple touch icon).
// iOS redondea las esquinas automáticamente, por eso el fondo es a sangre.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #152d4a 100%)",
          color: "#d4a853",
          fontSize: 120,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
