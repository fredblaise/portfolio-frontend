"use client";

import React, { useState } from "react";
import Lottie from "react-lottie-player";
import blackArrows from "@/app/lotties/black-arrows.json";

type Props = {};

const BlackArrows = (props: Props) => {
  return <Lottie loop animationData={blackArrows} play className="h-36 w-36" />;
};

export default BlackArrows;
