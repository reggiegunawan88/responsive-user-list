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

  return (
    <UserListContext.Provider value={{ userList: userList.slice(0, itemsPerPage), filterColor, filterCities }}>
      <div className="App m-4">
        <div className="flex flex-col gap-y-6">
          <Header />
          <List />
          {itemsPerPage < userList.length && (
            <button onClick={loadMore} className="font-bold border-default border-blue-400 shadow-md p-3 rounded w-fit self-center">
              Load More
            </button>
          )}
        </div>
      </div>
    </UserListContext.Provider>
  );
}

export default App;
