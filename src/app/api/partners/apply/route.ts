import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "partners/apply.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      name: requireString(record.name, "Name", 120),
      email: requireEmail(record.email),
      partner_type: requireString(record.partnerType, "Partner type", 60),
      region: requireString(record.region, "Country / region", 120),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}
