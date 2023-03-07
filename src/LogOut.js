import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

export default function LogOut() {
  const history = useHistory();
  axiosWithAuth()
    .post("http://localhost:9000/api/logout")
    .then((res) => localStorage.removeItem("token"));
  history.push("/login");

  return;
}
