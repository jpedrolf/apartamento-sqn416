import { ImageResponse } from "next/og";

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
          backgroundColor: "#1a3328",
          borderRadius: "36px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Roof */}
          <path
            d="M3 11L12 4L21 11"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* House body */}
          <path
            d="M5 10V19C5 19.5 5.5 20 6 20H18C18.5 20 19 19.5 19 19V10"
            stroke="#d4a24e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Door */}
          <rect
            x="10"
            y="14"
            width="4"
            height="6"
            rx="0.5"
            stroke="#d4a24e"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
