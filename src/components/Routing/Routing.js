import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from '../Home/Home'
import Register from '../RegisterUser/Register'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db} from "../Firebase/Firebase";
import Login from '../Login/Login'



import { getDocs, collection } from "firebase/firestore";


export default function Routing () {

    const [userID] = useAuthState(auth);
    let newData = React.useState()
    const [info, setInfo] = React.useState(null);
    React.useEffect(()=>{
      fetchPost();
  }, [])
  const fetchPost = async () => {
     
      await getDocs(collection(db, "userdata"))
          .then((querySnapshot)=>{               
               newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setInfo(newData);    
              console.log(newData)
  })   
  }
 return userID ? 
         <BrowserRouter>
         <Routes>
           <Route path="/" element={<Register />} >
           </Route>
           <Route path="/home" element={<Home />} />
        
           {/* <Route path="*" element={<NoPageFound />} /> */}
         
         </Routes>
       </BrowserRouter> :
       <BrowserRouter>
       <Routes>
         <Route path="/login" element={<Login />} >
         </Route>
         
      
         {/* <Route path="*" element={<NoPageFound />} /> */}
       
       </Routes>
     </BrowserRouter>
  }
  