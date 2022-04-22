import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../App";

const SinglePage = () => {
  const [data, setData] = useState("");
  const { users } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    const newUser = users.find((user) => user.id === +id);

    setData(newUser);
  });

  return (
    <section className="grid place-items-center md:p-5  mx-auto ">
      {data && (
        <section className="p-10 m:2 md:m-10 md:p-20 text-white bg-[#035397] rounded-md shadow-lg">
          <div className="py-2 text-4xl md:text-6xl">{data.name}</div>
          <div className="py-2 text-lg ">{data.company.catchPhrase}</div>

          <div className="text-xl font-bold p-3">General Info</div>
          <div className="columns-1 md:columns-3 mt-4">
            <div className="py-2">
              {" "}
              <span className="font-bold px-1">Username: </span> {data.username}
            </div>
            <div className="py-2">
              <span className="font-bold px-1">email: </span> {data.email}
            </div>
            <div className="py-2">
              <span className="font-bold px-1"> Address:</span>{" "}
              {data.address.street}
            </div>

            <div className="py-2">
              {" "}
              <span className="font-bold px-1"> city: </span>{" "}
              {data.address.city}
            </div>
            <div className="py-2">
              {" "}
              <span className="font-bold px-1"> zipcode:</span>{" "}
              {data.address.zipcode}
            </div>

            <div className="py-2">
              {" "}
              <span className="font-bold px-1">Phone Number: </span>{" "}
              {data.phone}
            </div>
            <div className="py-2">
              {" "}
              <span className="font-bold px-1"> website: </span> {data.website}
            </div>
            <div className="py-2">
              {" "}
              <span className="font-bold px-1"> company name : </span>{" "}
              {data.company.name}
            </div>
          </div>
          <div className="mt-4 px-1">
            <Link to="/" className="mt-3 p-3 bg-black text-white">
              Home
            </Link>
          </div>
        </section>
      )}
    </section>
  );
};

export default SinglePage;
