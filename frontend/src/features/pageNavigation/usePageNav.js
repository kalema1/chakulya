import { useState } from "react";

export function usePageNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function openMobileNav() {
    setShowMobileNav((isOpen) => !isOpen);
  }

  return { showMobileNav, openMobileNav };
}
