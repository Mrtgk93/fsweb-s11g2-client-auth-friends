import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import FriendList from "./FriendList";
import PrivateRoute from "./PrivateRoute";
import AddFriend from "./AddFriend";
import LogOut from "./LogOut";

function App() {
  return (
    <div className="App min-w-[900px]">
      <nav className="flex text-2xl font-bold flex-row  justify-between border-b-stone-900 border-4 p-2">
        <p className=" mt-4 font-extrabold">FRIENDS DATABASE</p>

        <div className=" flex flex-row  ">
          <Link to="/login">
            <p className=" text-xl px-2 py-4 bg-black text-fuchsia-50 mr-2 ">
              LOGIN.
            </p>
          </Link>
          <Link to="/friendList">
            <p className=" text-xl px-2 py-4 bg-black text-fuchsia-50 mr-2 ">
              FRIENDLIST.
            </p>
          </Link>
          <Link to="/friendList/add">
            <p className=" text-xl px-2 py-4 bg-black text-fuchsia-50 mr-2 ">
              ADDFRIEND.
            </p>
          </Link>
          <Link to="/logOut">
            <p className=" text-xl px-2 py-4 bg-black text-fuchsia-50 mr-2 ">
              LOGOUT
            </p>
          </Link>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/logOut" component={LogOut}></Route>
          <PrivateRoute exact path="/friendList" component={FriendList} />
          <PrivateRoute path="/friendList/add" component={AddFriend} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
