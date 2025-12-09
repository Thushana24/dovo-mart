"use client";

import { ChevronRightIcon } from "lucide-react";

export default function Hero() {
  const currency: string = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex min-w-full flex-col items-start gap-4 rounded-3xl bg-pink-200 p-4 sm:p-20">
        {/* free shipping */}
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-pink-300 p-1">
          <span className="rounded-2xl bg-pink-600 px-3 py-1 text-lg text-[10px] text-pink-50 md:text-xs">
            NEWS
          </span>
          <p className="text-[10px] text-pink-600 md:text-sm">
            Free Shippings Order Above LKR 10000!
          </p>
          <ChevronRightIcon className="h-4 w-4 text-pink-600" />
        </div>

        {/* title */}
        <h1 className="bg-linear-to-r from-slate-600 to-red-400 bg-clip-text text-6xl text-transparent  mb-10">
          Gadgets you'll love.
          <br />
          Prices you'll trust.
        </h1>

        {/* starting price */}
        <div className="flex flex-col text-slate-700 gap-2">
          <p className="text-sm leading-0">Starts From</p>
          <span className="font-semibold text-2xl">{currency} 1200</span>
        </div>
      </div>
    </div>
  );
}
