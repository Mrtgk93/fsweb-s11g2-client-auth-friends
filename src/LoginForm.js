import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

export default function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:9000/api/login", data)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          history.push("/friendList");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 className=" text-5xl font-extrabold mt-10  ">LOGIN</h1>
      <div className=" mr-44 mt-5">
        <form onSubmit={handleSubmit} className=" w-24 flex-col mx-auto ">
          <label className=" font-extrabold ">USERNAME</label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={data.username}
            className="p-1 ml-1 mb-4 border text-white bg-black border-neutral-900 h-16  w-72"
          />
          <label className=" font-extrabold">PASSWORD</label>
          <input
            onChange={handleChange}
            type="password"
            value={data.value}
            name="password"
            className="p-1 ml-1 border mb-4 text-white bg-black border-neutral-900 h-16 w-72"
          />
          <button
            type="submit"
            className="p-1 ml-1 mt-2 border text-white font-extrabold h-16 w-72 bg-black"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
