import { useState } from "react";
import  "./App.css"
import io from 'socket.io-client'
import Editor from '@monaco-editor/react'

const socket = io("http://localhost:5000");

const App = () => {
  const [joined ,Setjoined] = useState(false);
  const [roomId, SetRoomId] = useState("");
  const [userName, SetUserName] = useState("");
  const [language,setLanguage] = useState("javascript");
  const joinRoom = ()=>{
    if(roomId && userName){
      socket.emit("join",{roomId,userName});
      Setjoined(true);
    }
  }

  const copyRoomId = ()=>{
    
  }

  
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
         value={userName}
         onChange={(e) => SetUserName(e.target.value)}
         />
         <button onClick={joinRoom}>
          Join Room
         </button>
       </div>
         </div>;
    }
    return  <div className=" edito-container"> 
    <div className="sidebar">
      <div className="room-info">
        <h2>Code Room : {roomId}</h2>
        <button onClick={copyRoomId}> Copy Id</button>
      </div>
      <h3> Users in Room</h3>
      <ul>
        <li> </li>
        <li> </li>
        <li> </li>
      </ul>
      <p className="typingcl-indicator"> User typing ...</p>
      <select className="langauge-selector">
        <option value="javascript"> JavaScript</option>
         <option value="python"> Python</option>
          <option value="java"> Java</option>
           <option value="cpp"> C++ </option>
      </select>
      <button className="leave-button">Leave Room</button>
    </div>
      
      <div className="editor-wrapper">

  <Editor height={"!00%"} defaultLanguage= {language} />
      </div>
       </div>;
   
  
}

export default App
