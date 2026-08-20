import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14a8e9",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: "#ffd83d",
              borderRadius: 999,
            }}
          />
          Fresno County and Madera County
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 920 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.25, maxWidth: 860 }}>
            Pest control for Fresno businesses, rentals, and homes.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#ffd83d" }}>{siteConfig.phoneDisplay}</span>
          <span
            style={{
              background: "#da2a25",
              color: "#ffffff",
              padding: "14px 22px",
              fontWeight: 900,
            }}
          >
            Request an estimate
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
