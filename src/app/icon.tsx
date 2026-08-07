import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#14a8e9",
          color: "#ffd83d",
          fontSize: 22,
          fontWeight: 900,
          fontFamily: "Arial, sans-serif",
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
