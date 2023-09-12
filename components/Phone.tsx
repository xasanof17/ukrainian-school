import { PhoneIcon } from "lucide-react";

const Phone = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5">
      <button className="flex items-center justify-center rounded-full border-2 bg-primary p-3 shadow-md">
        <PhoneIcon size={25} className="text-secondary" />
      </button>
    </div>
  );
};

export default Phone;
