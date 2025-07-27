import { useState } from "react";
import clsx from "clsx";
import { timeRanges } from "../utils";

export const TimeRangeTabs = () => {
  const [filter, setFilter] = useState("7d");
  return (
    <div className="flex items-center border border-black ">
      {timeRanges.map((range, index) => (
        <button
          key={range.value}
          onClick={() => setFilter(range.value)}
          className={clsx(
            "px-3 py-1 text-sm font-medium",
            filter === range.value
              ? "bg-white text-green-500"
              : "bg-white text-black",
            index < timeRanges.length - 1 && "border-r border-black"
          )}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
};
