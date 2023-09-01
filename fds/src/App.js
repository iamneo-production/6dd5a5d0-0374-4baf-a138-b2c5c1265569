import "./App.css";

import AllRoutes from "./Components/Routes/AllRoutes";

import { getUsers } from "./Assets/services/BankService";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { getUserAtom, toggleChangeAtom } from "./Recoil/RecoilState";

import { useEffect } from "react";

function App() {
  const setUserData = useSetRecoilState(getUserAtom);

  const toggleChange = useRecoilValue(toggleChangeAtom);

  // getInitalData

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await getUsers();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUsers();
  }, [setUserData, toggleChange]);

  return (
    <div className="App h-screen ">
      <AllRoutes />
    </div>
  );
}

export default App;
