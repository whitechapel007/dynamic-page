import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../App";
const HomePage = () => {
  const { users } = useContext(UserContext);
  return (
    <section className="">
      <div className="grid  grid-cols-1  md:grid-cols-3 md:grid-rows-3  gap-2 p-5 m-5">
        {users.map(
          ({
            name,
            id,
            username,
            email,
            address: {
              street,
              suite,
              city,
              zipcode,
              geo: { lat, lng },
            },
          }) => (
            <>
              <Link to={`/user/${id}`}>
                <div className="p-10 m-3  flex justify-center items-center text-white bg-[#035397] text-lg md:text-2xl rounded-md shadow font-bold">
                  {name}
                </div>
              </Link>
            </>
          )
        )}
      </div>
    </section>
  );
};

export default HomePage;
