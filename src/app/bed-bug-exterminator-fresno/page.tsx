import { FresnoServiceLanding, fresnoServiceMetadata } from "@/components/fresno-service-landing";
import { fresnoServicePages } from "@/lib/fresno-service-pages";

const page = fresnoServicePages.bedBugs;

export const metadata = fresnoServiceMetadata(page);

export default function BedBugExterminatorFresnoPage() {
  return <FresnoServiceLanding page={page} />;
}
