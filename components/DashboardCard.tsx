type DashboardCardProps = {
  title: string;
  value: string | number;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-500">
        {title}
      </h2>

      <p className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}