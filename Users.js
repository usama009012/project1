import React, { useState } from "react";
import axios from "./Axiosdata";

const Users = () => {
  const [data, setData] = useState();
  const getUserData = () => {
    axios
      .get("/users")
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setData(
          data.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
              </tr>
              
            );
          })
        );
      })
      .catch((error) => {
         console.log(error);
      });
  };
  getUserData();

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-capitalize mt-5">
        <table className="table table-bordered">
        <thead><td>id</td><td>name</td><td>username</td></thead>
  <tbody>{data}</tbody>
      </table>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Users;
