import { useContext } from "react";
import { UserListContext } from "App";

function Header() {
  const userCtx = useContext(UserListContext);

  const filterColor = () => {
    userCtx.filterColor();
  };

  const filterCities = () => {
    userCtx.filterCities();
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-x-3">
        <img alt="logo" src="/qoala-logo.png" className="w-9 h-9 rounded" />
        <h3 className="font-serif font-bold">Qoala Apps</h3>
      </div>
      <div className="flex flex-col laptopM:flex-row gap-4 items-center">
        <p>Filter by:</p>
        <div className="flex flex-row gap-x-3">
          <button onClick={filterColor} className="btn-filter">
            Color
          </button>
          <button onClick={filterCities} className="btn-filter">
            Cities
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
