import { ImageResponse } from "next/og.js";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createElement as h } from "react";

const root = process.cwd();
const siteSource = await readFile(join(root, "src/lib/site.ts"), "utf8");
const phone = siteSourceMatch(siteSource, "phoneDisplay");
const name = siteSourceMatch(siteSource, "name");
const shareCard = {
  headline: "Call for an estimate",
  phone,
};

const logoBytes = await readFile(join(root, "public/bug-dude-logo.png"));
const logoSrc = `data:image/png;base64,${logoBytes.toString("base64")}`;

const res = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#08243a",
        padding: "56px 120px",
        fontFamily: "Arial, sans-serif",
      },
    },
    h("img", { src: logoSrc, height: 280 }),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 28,
          gap: 10,
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: 42,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          },
        },
        shareCard.headline,
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: 56,
            fontWeight: 900,
            color: "#ffd83d",
            letterSpacing: -1,
          },
        },
        shareCard.phone,
      ),
    ),
  ),
  { width: 1200, height: 630 },
);

const buf = Buffer.from(await res.arrayBuffer());
const pngPath = join(root, "src/app/opengraph-image.png");
const altPath = join(root, "src/app/opengraph-image.alt.txt");
const alt = `${shareCard.headline} from ${name}: ${shareCard.phone}`;
await writeFile(pngPath, buf);
await writeFile(altPath, alt);
console.log(`wrote ${pngPath} (${buf.length} bytes)`);
console.log(`wrote ${altPath}`);

function siteSourceMatch(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*"([^"]+)"`));
  if (!match) {
    throw new Error(`missing ${key} in src/lib/site.ts`);
  }
  return match[1];
}
