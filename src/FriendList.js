import { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

export default function FriendList() {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => setFriend(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-extrabold mt-10 ">FRIENDS LIST</h1>
      <div className="flex font-extrabold w-4/5 justify-center text-2xl  text-left mx-auto mt-2">
        <ul className=" ml-40   ">
          {friend.map((i) => (
            <li key={i.id}>
              -{i.name.toUpperCase()} - {i.email.toUpperCase()}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
