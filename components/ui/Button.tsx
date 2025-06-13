type ButtonProps = {
  onclick?: () => void;
  icon?: React.ReactNode;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ onclick, icon, label }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Book Collection
        </h2>
        <div
          onClick={onclick}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-4 py-2 rounded-lg flex items-center cursor-pointer"
        >
          {icon}
          {label}
        </div>
      </div>
    </>
  );
};

export default Button;
