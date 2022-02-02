import Card from "components/Card";
import { useContext } from "react";
import { UserListContext } from "App";

function List() {
  const userCtx = useContext(UserListContext);
  return (
    <div className="grid grid-cols-1 laptopM:grid-flow-row gap-x-4 gap-y-6 self-center">
      {userCtx.userList.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
}

export default List;
