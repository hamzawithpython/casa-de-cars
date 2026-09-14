import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mirrors typical multi-page-site behaviour: navigating to a new route
 * jumps to the top, but a link with a #hash (e.g. /services#signature)
 * scrolls that section into view instead.
 */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick so the target page has rendered before we scroll.
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
