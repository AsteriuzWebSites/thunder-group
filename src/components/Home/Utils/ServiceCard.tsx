type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  return (
    <div
      className={`glass-card-${color} flex aspect-video flex-col justify-center gap-2 rounded-lg bg-[#1e1e1e] p-4 lg:p-8 `}
    >
      <div className="text-5xl lg:text-6xl">{icon}</div>
      <h3 className="mt-2 lg:mt-4 text-xl lg:text-2xl font-bold text-white">{title}</h3>
      <p className="text-[#e0e0e0]">{description}</p>
    </div>
  );
}
