import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Register from "../RegisterUser/Register";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/Firebase";
import Login from "../Login/Login";

import { getDocs, collection } from "firebase/firestore";
import SignUpPage from "../SignUpPage";
import FrontPage from "../Front/FrontPage";
import PfHead from "../PfHead";
import Resume from "../Resume/Resume";

export default function Routing() {
  const [userID] = useAuthState(auth);
  let newData = React.useState();
  const [info, setInfo] = React.useState(null);
  React.useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = async () => {
    await getDocs(collection(db, "Users")).then((querySnapshot) => {
      newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setInfo(newData);
      console.log(newData);
    });
  };
  return userID ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PfHead />}></Route>

        {/* <Route path="/" element={<Register />}></Route> */}
        {/* <Route path="/home" element={<Home />} /> */}

        {/* <Route path="*" element={<NoPageFound />} /> */}
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/frontpage" element={<PfHead />}></Route>
        <Route path="/frontpage/resume" element={<Resume />}></Route>

        {/* <Route path="*" element={<NoPageFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
