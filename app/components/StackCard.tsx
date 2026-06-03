import { IconType } from "react-icons";

interface StackCardProps {
  icon: IconType;
  title: string;
  description: string;
  small?: boolean;
  color: string;
}

const StackCard = ({
  icon: Icon,
  title,
  description,
  small,
  color,
}: StackCardProps) => {
  if (small) {
    return (
      <div className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-all border border-zinc-100">
        <div
          className="flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0"
          style={{ backgroundColor: `${color}18` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
          {title}
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-col bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all h-full border border-zinc-100">
      <div className="flex gap-3 items-center">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${color}18` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export default StackCard;
