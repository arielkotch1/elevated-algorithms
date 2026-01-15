import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0F1E",
        }}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 64 64"
          aria-hidden
          style={{ transform: "translateX(-2px)" }}
        >
          <path d="M22 16 44 32 22 48Z" fill="#7EE0C3" />
        </svg>
      </div>
    ),
    size,
  );
}
