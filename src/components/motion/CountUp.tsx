export default function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  return (
    <span>
      {value.toLocaleString("en-ZA")}
      {suffix}
    </span>
  );
}
