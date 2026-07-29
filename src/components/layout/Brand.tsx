import Link from "next/link";

export default function Brand({ tagline = "Charging • Storage • Smart Power" }: { tagline?: string }) {
  return (
    <Link className="brand" href="/" aria-label="Civitas Energy Home">
      <span className="logo" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="20" height="20" fill="none" aria-hidden="true">
          <path d="M21 3 L9 22 H18 L16 37 L32 15 H22 Z" fill="#06111f" />
        </svg>
      </span>
      <span className="brandCopy">
        <b>Civitas</b> Energy
        <small>{tagline}</small>
      </span>
    </Link>
  );
}
