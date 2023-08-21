import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current, {
      onNavigate: () => {
        console.log("the Container noticed navigation in Marketing");
      },
    });
  }, []);

  return <div ref={ref}></div>;
}
