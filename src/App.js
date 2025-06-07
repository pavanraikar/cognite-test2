import React, { useState } from 'react';
import Msg from './Msg';

const App = () => {
  const listforfrinds = ['ABC', 'XYZ', 'PQR'];
  const [getFriend, setFriend] = useState(listforfrinds[0])
  const [getChats, setChats] = useState({});

  const PostMsg = (value) => {
    const newMsg = {
      text: value,
    };
    setChats(lastChats => {
      const lastmsg = lastChats[getFriend] || [];
      const upDateMsg = [...lastmsg, newMsg];
    
      return {
        ...lastChats,
        [getFriend]: upDateMsg,
      };
    });
  };
  let currentChats = getChats[getFriend] || [];
  
  return (
    <div className="app">
      <div className="leftbar">
          <h3>Friends</h3>
          {listforfrinds.map(friend => (
            <div
              className={`friendlist ${friend === getFriend ? 'selected' : ''}`}
              onClick={() => setFriend(friend)}
            >
            {friend}
            </div>
          ))}
      </div>
      <div className="Msgmainscreen">
        <div className="header">
          <h3>{listforfrinds.find(e => e=== getFriend)}</h3>
        </div>
        <div className="Msgwindow">
          {currentChats.length === 0 ? (
            <div>Please Type Your Message</div>
          ) : (
            currentChats.map(msg => (
              <div>
                <p>{msg.text}</p>
              </div>
            ))
          )}
        </div>
        <Msg onPostMsg={PostMsg} />
      </div>
    </div>
  );
};

export default App;
