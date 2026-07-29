import { architectureNodes } from "@/data/howItWorksData";

export default function ArchitectureDiagram() {
  const { inputs, core, outputs } = architectureNodes;

  return (
    <div className="diagramWrap">
      <svg viewBox="0 0 1100 420" width="100%" height="320" role="img" aria-label="Civitas Energy system architecture diagram">
        <defs>
          <linearGradient id="ce-wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2DE2A6" stopOpacity=".78" />
            <stop offset="1" stopColor="#5B8CFF" stopOpacity=".78" />
          </linearGradient>
        </defs>

        <rect x="40" y="70" width="280" height="90" rx="16" fill="rgba(255,255,255,.03)" stroke="rgba(234,240,255,.18)" strokeWidth="2" />
        <text x="62" y="102" fill="#EAF0FF" fontSize="13" fontWeight="800">{inputs[0].title}</text>
        <text x="62" y="128" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{inputs[0].caption}</text>

        <rect x="40" y="190" width="280" height="90" rx="16" fill="rgba(255,255,255,.03)" stroke="rgba(234,240,255,.18)" strokeWidth="2" />
        <text x="62" y="222" fill="#EAF0FF" fontSize="13" fontWeight="800">{inputs[1].title}</text>
        <text x="62" y="248" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{inputs[1].caption}</text>

        <rect x="40" y="310" width="280" height="90" rx="16" fill="rgba(255,255,255,.03)" stroke="rgba(234,240,255,.18)" strokeWidth="2" />
        <text x="62" y="342" fill="#EAF0FF" fontSize="13" fontWeight="800">{inputs[2].title}</text>
        <text x="62" y="368" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{inputs[2].caption}</text>

        <rect x="360" y="140" width="340" height="140" rx="18" fill="rgba(45,226,166,.08)" stroke="rgba(45,226,166,.30)" strokeWidth="2" />
        <text x="382" y="174" fill="#EAF0FF" fontSize="13" fontWeight="800">{core.title}</text>
        <text x="382" y="198" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{core.caption}</text>
        <text x="382" y="220" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{core.caption2}</text>

        <rect x="750" y="70" width="310" height="90" rx="16" fill="rgba(91,140,255,.08)" stroke="rgba(91,140,255,.30)" strokeWidth="2" />
        <text x="772" y="102" fill="#EAF0FF" fontSize="13" fontWeight="800">{outputs[0].title}</text>
        <text x="772" y="128" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{outputs[0].caption}</text>

        <rect x="750" y="190" width="310" height="90" rx="16" fill="rgba(91,140,255,.08)" stroke="rgba(91,140,255,.30)" strokeWidth="2" />
        <text x="772" y="222" fill="#EAF0FF" fontSize="13" fontWeight="800">{outputs[1].title}</text>
        <text x="772" y="248" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{outputs[1].caption}</text>

        <rect x="750" y="310" width="310" height="90" rx="16" fill="rgba(91,140,255,.08)" stroke="rgba(91,140,255,.30)" strokeWidth="2" />
        <text x="772" y="342" fill="#EAF0FF" fontSize="13" fontWeight="800">{outputs[2].title}</text>
        <text x="772" y="368" fill="rgba(234,240,255,.72)" fontSize="11" fontWeight="700">{outputs[2].caption}</text>

        <path d="M320 115 C340 115, 350 115, 360 180" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M320 235 C340 235, 350 235, 360 210" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M320 355 C340 355, 350 355, 360 240" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />

        <path d="M700 210 C720 210, 730 210, 750 115" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M700 210 C720 210, 730 210, 750 235" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M700 210 C720 210, 730 210, 750 355" stroke="url(#ce-wire)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
