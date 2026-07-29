import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "contact/submit.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      name: requireString(record.name, "Name", 120),
      email: requireEmail(record.email),
      phone: cleanString(record.phone, 40),
      inquiry_type: requireString(record.inquiryType, "Inquiry type", 60),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}
