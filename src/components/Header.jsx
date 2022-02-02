import { useContext } from "react";
import { UserListContext } from "App";

function Header() {
  const userCtx = useContext(UserListContext);

  /**
   *
   * @param {String} param => filter value based on clicked button
   */
  const filterValue = (param) => {
    userCtx.filterList(param);
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
          <button onClick={() => filterValue("color")} className="btn-filter bg-indigo-400 hover:bg-indigo-600">
            Color
          </button>
          <button onClick={() => filterValue("cities")} className="btn-filter bg-indigo-400 hover:bg-indigo-600">
            Cities
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
