import React, { useEffect, useRef } from "react";
import { mount as dashboardMount } from "dashboard/DashboardApp";

export default function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    dashboardMount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}
