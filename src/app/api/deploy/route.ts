import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "deploy/submit.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      name: requireString(record.name, "Name", 120),
      email: requireEmail(record.email),
      site_type: requireString(record.siteType, "Site type", 60),
      city: requireString(record.city, "City / area", 120),
      bays: cleanString(record.bays, 40),
      grid_status: cleanString(record.gridStatus, 60),
      message: cleanString(record.message, 4000),
      ...leadContext(record),
    };
  });
}
