import { useState } from "react";
import  "./App.css"
import io from 'socket.io-client'
import Editor from '@monaco-editor/react'

const socket = io("http://localhost:5000");

const App = () => {
  const [joined ,Setjoined] = useState(false);
  const [roomId, SetRoomId] = useState("");
  const [userName, SetUserName] = useState("");
  const [language,SetLanguage] = useState("javascript");
  const [code , SetCode] =  useState("")
  const joinRoom = ()=>{
    if(roomId && userName){
      socket.emit("join",{roomId,userName});
      Setjoined(true);
    }
  }

  const copyRoomId = ()=>{
    
  }
  const  handleCodeChange = (newCode)=>{
     SetCode(newCode);
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
    return  <div className=" editor-container"> 
    <div className="sidebar">
      <div className="room-info">
        <h2>Code Room : {roomId}</h2>
        <button onClick={copyRoomId} className="copy-button"> Copy Id</button>
      </div>
      <h3> Users in Room</h3>
      <ul>
        <li>Rahul </li>
        <li> Prashant</li>
        <li> golu </li>
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

  <Editor height={"100%"} defaultLanguage= {language}
  language= {language}
  value = {code}
  onChange={handleCodeChange}
  theme="vs-dark"
  options={
    {
      minimap:{enabled:false},
      fontSize :14,
    }
  }
  />
      </div>
       </div>;
   
  
}

export default App
