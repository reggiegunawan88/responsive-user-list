import { useContext } from "react";
import { UserListContext } from "App";

function LoadMore() {
  const userCtx = useContext(UserListContext);
  return (
    <button onClick={userCtx.loadMore} className="font-bold border-default border-blue-400 shadow-md p-3 rounded w-fit h-fit place-self-center">
      Load More
    </button>
  );
}

export default LoadMore;
