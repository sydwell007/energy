import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "investors/request-pack.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      full_name: requireString(record.fullName, "Name", 120),
      email: requireEmail(record.email),
      organization: cleanString(record.organization, 200),
      interest: requireString(record.interest, "Interest", 60),
      message: cleanString(record.message, 4000),
      ...leadContext(record),
    };
  });
}
