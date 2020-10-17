import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const Dataenter = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  const [getdata, setGetData] = useState([]);
  const [showdata, setshowdata] = useState();

  const getValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setGetData((preval) => {
      return [...preval, data];
    });
    setData({
      id: "",
      name: "",
      email: "",
      age: "",
    });
  };

  const deleteData = (id) => {
    setGetData((preval) => {
      return preval.filter((arrele, index) => {
        return index + 1 !== id;
      });
    });
  };

  const showData = (id, callback) => {
    const obj = getdata.find((item) => item.id == id);
    console.log(obj);
    let [ids, name, email, age] = Object.values(obj);
    document.getElementById("input1").value = ids;
    document.getElementById("input2").value = name;
    document.getElementById("input3").value = email;
    document.getElementById("input4").value = age;
    callback();
  };

  const disable = () => {
    document.getElementById("input3").disabled = true;
  };

  const enable = () => {
    document.getElementById("input3").disabled = false;
  };

  const allData = getdata.map((val, i) => {
    return (
      <tr>
        <td>{val.id}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.age}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteData(i + 1)}
          >
            Delete
          </button>

          <button
            className="btn btn-sm btn-info ml-5"
            onClick={() => showData(i + 1, disable)}
          >
            Show
          </button>

          <button
            className="btn btn-sm btn-secondary ml-5"
            onClick={() => enable()}
          >
            Enable
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="text-center text-capitalize mt-2 mb-5">
              enter your records
              <p id="show"></p>
            </h1>
            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  name="id"
                  placeholder="Enter your ID"
                  className="form-control"
                  onChange={getValues}
                  value={data.id}
                  id="input1"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="form-control"
                  onChange={getValues}
                  value={data.name}
                  id="input2"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="form-control"
                  onChange={getValues}
                  value={data.email}
                  id="input3"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="age"
                  placeholder="Enter your Age"
                  className="form-control"
                  onChange={getValues}
                  value={data.age}
                  id="input4"
                />
              </div>

              <div className="form-group">
                <Button variant="contained" color="primary" type="submit">
                  submit
                </Button>
              </div>
            </form>
          </div>

          <div className="col-12 text-capitalize text-center">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>age</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>{allData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dataenter;
