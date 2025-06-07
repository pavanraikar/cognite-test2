import React, { useState } from 'react';

function Msg({ onPostMsg }) {
  const [getMsg, setMsg] = useState('');
  
  const OnSubmit = (val) => {
    val.preventDefault();
    if (!getMsg.trim()) {
      alert("Type a message");
      return;
    }
    onPostMsg(getMsg);
    setMsg(''); 
   
  };
  return (
    <form className="msgform" onSubmit={OnSubmit}>
      <input
        className="msgtextbox"
        type="text"
        value={getMsg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Msg;