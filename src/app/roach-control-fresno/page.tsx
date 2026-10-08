import { FresnoServiceLanding, fresnoServiceMetadata } from "@/components/fresno-service-landing";
import { fresnoServicePages } from "@/lib/fresno-service-pages";

const page = fresnoServicePages.roaches;

export const metadata = fresnoServiceMetadata(page);

export default function RoachControlFresnoPage() {
  return <FresnoServiceLanding page={page} />;
}
