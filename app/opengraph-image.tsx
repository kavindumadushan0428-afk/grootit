import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "GROOTIT: Web Design, Branding & AI Agency in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "grootit-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F1F7FF 55%, #CFE4FF 100%)",
          color: "#0B132B",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={330} height={110} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Creativity Meets Intelligence.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "#475569",
              display: "flex",
            }}
          >
            Web design · Branding · AI & automation · Digital growth
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 700,
            color: "#0066FF",
          }}
        >
          Creative + AI agency in Sri Lanka
        </div>
      </div>
    ),
    { ...size }
  );
}
