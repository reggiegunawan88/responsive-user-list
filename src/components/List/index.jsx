import { useContext } from "react";
import { UserListContext } from "App";
import Card from "components/Card";
import LoadMore from "components/LoadMore";
import "./index.css";

function List() {
  const userCtx = useContext(UserListContext);
  const renderList = userCtx.userList.slice(0, userCtx.itemsPerPage);

  return (
    <div className="w-full">
      <div className="grid grid-flow-row justify-center laptopM:flex laptopM:overflow-x-auto laptopM:justify-start items-center gap-6 p-4">
        {renderList.map((user, idx) => (
          <Card key={idx} user={user} />
        ))}
        {userCtx.itemsPerPage < userCtx.userList.length && <LoadMore />}
      </div>
    </div>
  );
}

export default List;
