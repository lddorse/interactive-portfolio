import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-side execution only
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let lastPath = sessionStorage.getItem("lastPath");

    const handleRouteChangeStart = () => {
      sessionStorage.setItem("lastPath", window.location.pathname);
      sessionStorage.setItem("scrollPosition", document.documentElement.scrollTop);
    };

    const handleRouteChangeComplete = () => {
      const gridSection = document.getElementById("gridContainer");

      if (window.location.pathname === lastPath && gridSection) {
        setTimeout(() => {
          gridSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, isClient]);

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
