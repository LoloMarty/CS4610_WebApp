import React from "react";

const ChatRoom = () => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/messages")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <h1>Hi, this is the ChatRoom page</h1>
      <p>{!data ? "Loading..." : data}</p>
    </>
  );
};

export default ChatRoom;