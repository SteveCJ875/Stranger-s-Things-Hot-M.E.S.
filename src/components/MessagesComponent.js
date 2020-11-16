import React, { useState } from "react";

const MessageComponent = (props) => {
  const { messageList } = props;
  console.log(messageList, "this is props");
  return (
    <div className="message">
      {messageList.map((mes, idx) => {
        console.log("mes", mes);
        return (
          <div className="message-card" key={idx}>
            <h1> from : {mes.fromUser.username}</h1>
            <p>{mes.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MessageComponent;
