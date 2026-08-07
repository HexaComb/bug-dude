import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Bug Dude Pest Control | Fresno Commercial & Residential Pest Control",
  description: "Local pest control for Fresno businesses and homes. Request an estimate or call The Bug Dude Pest Control today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{/* THESIS: A local service site that reads like a capable field-dispatch partner, not a generic contractor page. OWN-WORLD: electric blue, red and yellow pulled from the supplied vehicle mark; crisp route-board geometry. STORY: A visitor sees commercial relevance, clear pest coverage, and a direct estimate path. FIRST VIEWPORT: oversized commercial headline left; structured request board and primary action right. FORM: Fresno field-service dispatch board, direction seed 289e9860. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}{children}</body></html>;
}
