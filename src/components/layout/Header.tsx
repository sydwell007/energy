import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Brand from "@/components/layout/Brand";
import MobileNav from "@/components/layout/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { headerNavItems, primaryCtas } from "@/data/siteConfig";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerContainer">
        <div className="nav">
          <Brand />

          <nav className="desktopNav" aria-label="Primary navigation">
            {headerNavItems.map((item) =>
              item.kind === "link" ? (
                <Link href={item.href} key={item.href} className={item.href === "/petrol-program" ? "navEmphasis" : ""}>
                  {item.label}
                </Link>
              ) : (
                <details className="navDropdown" key={item.label}>
                  <summary>
                    {item.label}
                    <ChevronDown size={14} strokeWidth={2.2} aria-hidden="true" />
                  </summary>
                  <div className="navDropdownPanel">
                    {item.links.map((link) => (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
              )
            )}
          </nav>

          <div className="headerActions">
            <ButtonLink href={primaryCtas.invest.href} variant="ghost">
              Investors
            </ButtonLink>
            <ButtonLink href={primaryCtas.deploy.href} variant="primary">
              Deploy at My Site
            </ButtonLink>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
