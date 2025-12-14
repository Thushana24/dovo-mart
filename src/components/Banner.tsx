"use client";

import { X } from "lucide-react";
import React from "react";
import Button from "./Button";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    isVisible && (
      <div className="flex items-center justify-between gap-4 overflow-hidden bg-linear-to-r from-blue-600 to-purple-500 px-6 py-1">
        <h2 className="text-[12px] text-white sm:text-sm">
          Get 20% Off on Your First Order!
        </h2>
        <div className="flex shrink-0 items-center justify-between gap-5 sm:gap-10">
          <Button
            size={"xs"}
            className="rounded-4xl bg-slate-50 text-slate-800 hover:bg-slate-200 sm:w-32"
          >
            Claim Offer
          </Button>
          <button onClick={() => setIsVisible(false)} aria-label="Close banner">
            <X className="h-4 w-4 cursor-pointer text-white" />
          </button>
        </div>
      </div>
    )
  );
};

export default Banner;
