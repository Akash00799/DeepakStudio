"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const locoScrollInstance = useRef(null);

  useEffect(() => {
    let mounted = true;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (mounted && scrollRef.current) {
        locoScrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.075,
        });
      }
    };

    initScroll();

    return () => {
      mounted = false;
      if (locoScrollInstance.current) {
        locoScrollInstance.current.destroy();
        locoScrollInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
