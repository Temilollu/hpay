import clsx from "clsx";

export const MetricCard = ({
  title,
  value,
  previous,
  progressLabel,
  progressColor,
  Icon,
}) => {
  const color = progressColor === "green" ? "text-green-600" : "text-red-600";

  return (
    <div className="border border-black rounded bg-white p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold">{value}</span>
        {Icon && <Icon className="w-4 h-4 text-green-600" />}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="text-sm ">
          Previous <br /> {previous}
        </div>

        <div className="text-sm ">
          Progress <br /> <span className={clsx(color)}>{progressLabel}</span>
        </div>
      </div>
    </div>
  );
};
