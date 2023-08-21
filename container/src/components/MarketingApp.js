import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    marketingMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });
  }, []);

  return <div ref={ref}></div>;
}
