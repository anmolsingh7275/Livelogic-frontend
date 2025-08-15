import { useState } from "react";
import  "./App.css"
import io from 'socket.io-client'

const socket = io("http://localhost:5000");

const App = () => {
  const [joined ,Setjoined] = useState(false);
  const [roomId, SetRoomId] = useState("");

  const [userName, SetUserName] = useState("");

  
    if(!joined){
       return <div className="join-container"> 
       
       <div className="join-form">
        <h1> Join Code Room </h1>
        <input type="text"
         placeholder="  Enter Room Id"
         value={roomId}
         onChange={(e) => SetRoomId(e.target.value)}
         />
          <input type="text"
         placeholder="Enter Your Name "
         value={roomId}
         onChange={(e) => SetUserName(e.target.value)}
         />
         <button>
          Join Room
         </button>
       </div>
         </div>;
    }
    return  <div> User   joined </div>;
   
  
}

export default App
