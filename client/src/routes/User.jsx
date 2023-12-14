import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Follow from "../components/Follow";

export default function User({ token }) {
  const { username } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/user/${username}`);
      setData(response.data);
    };
    fetchData();
  }, []);

  //   return (
  //     <div>
  //       <Header />
  //       <Feed data={data} />
  //     </div>
  //   );

  function format() {
    var arr = [];
    for (const [key, value] of Object.entries(data)) {
      arr.push(value);
    }
    return arr;
  }

  return (
    <div>
      <Header />
      <h3>{username}'s messages:</h3>
      {token ? <Follow token={token} followingName={username} /> : <div />}
      {format().map((value) => (
        <div>
          <p>{value.message}</p>
          <sub>At {value.timestamp}</sub>
          <br />
        </div>
      ))}
      <Footer />
    </div>
  );
}
