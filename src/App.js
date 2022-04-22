import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import SinglePage from "./components/SinglePage";
export const UserContext = React.createContext();
const App = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  const increment = () => {};

  const decrement = () => {};

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // const {
    //   name,
    //   username,
    //   email,
    //   address: {
    //     street,
    //     suite,
    //     city,
    //     zipcode,
    //     geo: { lat, lng },
    //   },
    // } = data[index];

    // let final = {
    //   name,
    //   username,
    //   email,
    //   street,
    //   suite,
    //   city,
    //   zipcode,
    //   lat,
    //   lng,
    // };

    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, [index]);

  return (
    <>
      <UserContext.Provider
        value={{
          users,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<SinglePage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
