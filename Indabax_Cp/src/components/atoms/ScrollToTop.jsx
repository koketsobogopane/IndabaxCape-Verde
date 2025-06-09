import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current pathname from the URL

  useEffect(() => {
    // Whenever the pathname changes (i.e., a new route is navigated to),
    // scroll the window to the very top.
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run this effect whenever pathname changes

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;
