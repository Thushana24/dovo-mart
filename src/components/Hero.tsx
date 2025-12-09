"use client";

import { ChevronRightIcon } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const currency: string = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex min-w-full flex-col items-start gap-4 rounded-3xl bg-pink-200 p-4 sm:p-20">
        {/* free shipping */}
        <div className="flex items-center justify-center gap-2 rounded-4xl bg-pink-300 p-1">
          <span className="rounded-4xl bg-pink-600 px-3 py-2 text-sm text-pink-50 sm:py-1">
            NEWS
          </span>
          <p className="text-sm text-pink-600">
            Free Shippings Order Above LKR 10000!
          </p>
          <ChevronRightIcon className="size-6 text-pink-600 sm:size-4" />
        </div>

        {/* title */}
        <h1 className="mb-1 bg-linear-to-r from-slate-600 to-red-400 bg-clip-text text-2xl text-transparent md:mb-10 md:text-6xl">
          Gadgets you'll love.
          <br />
          Prices you'll trust.
        </h1>

        {/* starting price */}
        <div className="flex flex-col gap-2 text-slate-700">
          <p className="text-sm leading-0">Starts From</p>
          <span className="text-2xl font-semibold">{currency} 1200</span>
        </div>
        <Button className="bg-slate-800 hover:bg-gray-600">Learn More</Button>
      </div>
    </div>
  );
}
