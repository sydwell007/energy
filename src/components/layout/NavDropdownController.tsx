"use client";

import { useEffect } from "react";

/**
 * Native <details>/<summary> dropdowns don't coordinate with each other, so
 * opening one leaves any previously-opened dropdown open too. This mounts
 * once in the header and keeps at most one .navDropdown open at a time.
 */
export default function NavDropdownController() {
  useEffect(() => {
    function closeAll(except?: HTMLDetailsElement) {
      document.querySelectorAll<HTMLDetailsElement>("details.navDropdown[open]").forEach((details) => {
        if (details !== except) details.open = false;
      });
    }

    function handleToggle(event: Event) {
      const target = event.target;
      if (!(target instanceof HTMLDetailsElement)) return;
      if (!target.classList.contains("navDropdown") || !target.open) return;
      closeAll(target);
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (target instanceof Element && target.closest("details.navDropdown")) return;
      closeAll();
    }

    function handleLinkClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const details = target?.closest("details.navDropdown");
      if (details instanceof HTMLDetailsElement && target?.closest("a")) {
        details.open = false;
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") closeAll();
    }

    document.addEventListener("toggle", handleToggle, true);
    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("click", handleLinkClick, true);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("toggle", handleToggle, true);
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("click", handleLinkClick, true);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
}
