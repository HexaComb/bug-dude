import { redirect } from "next/navigation";

export function GET() {
  redirect(process.env.NEXT_PUBLIC_BOOKING_URL || "/#estimate");
}
