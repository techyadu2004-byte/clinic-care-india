type StatCardProps = {
  title: string;
  value: number | string;
  bgColor: string;
  textColor: string;
};

export default function StatCard({
  title,
  value,
  bgColor,
  textColor,
}: StatCardProps) {
  return (
    <div className={`rounded-xl p-6 shadow ${bgColor}`}>
      <h2 className={`text-lg font-semibold ${textColor}`}>
        {title}
      </h2>

      <p className="mt-3 text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}