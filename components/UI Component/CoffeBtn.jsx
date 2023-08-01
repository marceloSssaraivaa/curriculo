import { GiCoffeeCup } from "react-icons/gi";

const CoffeBtn = () => {
  return (
    <a
      className="resetButton transition-all flex items-center justify-center bg-green-400 group hover:bg-yellow-400 h-12 overflow-hidden relative"
      href="https://www.buymeacoffee.com/imhalid"
    >
      <button style={{ color: 'black' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          Pague-me um café <GiCoffeeCup className="ml-2 h-6 w-6" />
        </span>
      </button>
    </a>
  );
};

export default CoffeBtn;
