import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const TemplateSwitcher = ({ value }) => {
  const { selectTemplate } = useContext(CvContext);
  return (
    <div>
      <button
        className="h-10 w-10 rounded-md inline-block bg-gray-250 border-2 border-gray-500 transition-all active:scale-95 hover:scale-105 active:border-blue-700 active:bg-sky-100"
        value={value}
        onClick={selectTemplate}
      >
        {value}
      </button>
    </div>
  );
};

export default TemplateSwitcher;
