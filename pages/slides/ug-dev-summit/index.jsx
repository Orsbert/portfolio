import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Presentation = dynamic(
  () => import("../../../components/ugDevSummit/Presentation"),
  {
    ssr: false,
  }
);

const Slides = () => {
  return <Presentation />;
};

export default Slides;
