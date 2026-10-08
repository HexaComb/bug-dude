import { FresnoServiceLanding, fresnoServiceMetadata } from "@/components/fresno-service-landing";
import { fresnoServicePages } from "@/lib/fresno-service-pages";

const page = fresnoServicePages.rodents;

export const metadata = fresnoServiceMetadata(page);

export default function RodentControlFresnoPage() {
  return <FresnoServiceLanding page={page} />;
}
