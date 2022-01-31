import { useState, useEffect } from "react";
import { getUsers } from "service/api";
import Header from "components/Header";
import List from "components/List";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUserData(res);
    });
  }, []);

  return (
    <div className="App m-4">
      <div className="flex flex-col gap-y-6">
        <Header />
        <List userData={userData} />
      </div>
    </div>
  );
}

export default App;
