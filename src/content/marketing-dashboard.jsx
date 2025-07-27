import { DollarSign, CheckCircle2 } from "lucide-react";
import { Users } from "lucide-react";
import {
  acquisitionCostData,
  budgetByPlatform,
  metricsData,
  trafficSourceData,
} from "../utils";
import {
  TimeRangeTabs,
  MetricCard,
  CustomBarChart,
  CustomLineChart,
} from "../components";

export const MarketingDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Marketing</h1>
        <TimeRangeTabs />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          {metricsData.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              previous={metric.previous}
              progressLabel={metric.progressLabel}
              progressColor={metric.progressColor}
              Icon={metric.icon}
            />
          ))}
        </div>

        <div className="border border-black bg-white rounded p-4">
          <h3 className="text-sm font-bold text-black mb-4">
            Acquisition vs Cost
          </h3>
          <div className="w-full h-80">
            <CustomLineChart data={acquisitionCostData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="border border-black bg-white rounded p-4">
          <h3 className="text-sm font-bold mb-4">Traffic Source</h3>
          <div className="w-full h-72">
            <CustomBarChart data={trafficSourceData} />
          </div>
        </div>

        <div className="border border-black bg-white rounded p-4">
          <h3 className="text-sm font-bold mb-4">Budget by Platform</h3>
          <ul className="space-y-4">
            {budgetByPlatform.map((budget) => {
              const Icon = budget.platform;
              return (
                <li
                  key={budget.platform}
                  className="space-y-1 flex items-center"
                >
                  <Icon className="me-2" />
                  <div className="w-[95%]">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">
                        Remaining: ${budget.remaining.toLocaleString()}
                      </span>

                      <span>{budget.pct}%</span>
                    </div>
                    <div className="h-2 bg-neutral-100 rounded mt-2">
                      <div
                        className={`h-full ${budget.color} rounded`}
                        style={{ width: `${budget.pct}%` }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
