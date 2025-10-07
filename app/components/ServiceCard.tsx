import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  gradient: string;
}

const ServiceCard = ({
  title,
  icon: Icon,
  description,
  gradient,
}: ServiceCardProps) => (
  <div className="p-6 rounded-md shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-start">
    <div className={`p-3 rounded-full ${gradient} mb-6 transition-all`}>
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
