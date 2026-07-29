"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { headerNavItems, primaryCtas } from "@/data/siteConfig";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea');
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const focusFrame = requestAnimationFrame(() => first?.focus());

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeydown);
      trigger?.focus();
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <div className="mobileNavWrap">
      <button
        ref={triggerRef}
        type="button"
        className="mobileNavToggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open ? (
        <>
          <button className="mobileNavScrim" type="button" aria-label="Close navigation" onClick={close} />
          <div
            ref={panelRef}
            className="mobileNavPanel"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mobileNavIntro">
              <span>Explore Civitas Energy</span>
              <p>Charging, storage, and smart power infrastructure for Africa.</p>
            </div>
            <nav className="mobileNavLinks" aria-label="Mobile navigation">
              {headerNavItems.map((item) =>
                item.kind === "link" ? (
                  <Link key={item.href} href={item.href} onClick={close}>
                    {item.label}
                  </Link>
                ) : (
                  <div className="mobileNavGroup" key={item.label}>
                    <span>{item.label}</span>
                    {item.links.map((link) => (
                      <Link key={link.href} href={link.href} onClick={close}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </nav>
            <div className="mobileNavCtas">
              <Link href={primaryCtas.deploy.href} className="btn primary" onClick={close}>
                Deploy at My Site
              </Link>
              <Link href="/contact" className="btn" onClick={close}>
                Contact the team
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
