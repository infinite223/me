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
  return (
    <div className="flex gap-2 flex-col bg-white rounded-md p-5 shadow-sm hover:shadow-md transition-all h-full max-md:w-full">
      <div className="flex gap-5 items-center">
        <Icon
          className={`${small ? "w-10 h-10" : "w-10 h-10"} text-blue-500`}
          style={{ color }}
        />
        <h4 className="text-base font-semibold">{title}</h4>
      </div>

      {!small && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

export default StackCard;
