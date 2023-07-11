import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie";

const Test = () => {
  const cookies = cookie.parse(document.cookie);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await axios.get("http://localhost:4001/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  const fetchUsersHeaders = async () => {
    await axios
      .get("http://localhost:4001/users", {
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
  };

  useEffect(() => {
    // fetchUsers();
    fetchUsersHeaders();
  }, []);
  console.log(users);

  return <div>{users[0]?.username}</div>;
};

export default Test;
