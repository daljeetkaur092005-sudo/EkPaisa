import { useEffect } from "react";
import { useLocation } from "react-router";

// Render this component inside your Router so every route starts at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
