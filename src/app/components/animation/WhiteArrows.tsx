"use client";

import React, { useState } from "react";
import Lottie from "react-lottie-player";
import whiteArrows from "@/app/lotties/white-arrows.json";

type Props = {};

const WhiteArrows = (props: Props) => {
  return <Lottie loop animationData={whiteArrows} play className="h-36 w-36" />;
};

export default WhiteArrows;
