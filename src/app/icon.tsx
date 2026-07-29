import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "radial-gradient(circle at 30% 30%, #2de2a6, #1a8f6c 40%, #070b14 82%)",
        }}
      >
        <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
          <path d="M21 3 L9 22 H18 L16 37 L32 15 H22 Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
