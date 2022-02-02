import { useState, useEffect, createContext } from "react";
import { getUsers } from "service/api";
import Header from "components/Header";
import List from "components/List";

export const UserListContext = createContext();

function App() {
  const [userList, setUserList] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getUsers().then((res) => {
      setUserList(res);
    });
  }, []);

  const filterColor = () => {
    console.log("filter color");
  };

  const filterCities = () => {
    console.log("filter city");
  };

  // load more add 10 items per pagination
  const loadMore = () => {
    setItemsPerPage(itemsPerPage + 10);
  };

  // data provide to context value
  const ctxData = {
    userList,
    itemsPerPage,
    loadMore,
    filterColor,
    filterCities,
  };

  return (
    <UserListContext.Provider value={ctxData}>
      <div className="App m-4">
        <div className="flex flex-col gap-y-10">
          <Header />
          <List />
        </div>
      </div>
    </UserListContext.Provider>
  );
}

export default App;
