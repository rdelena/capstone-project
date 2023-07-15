import { useState, useEffect } from "react";
import axios from "axios";
// import cookie from "cookie";

// Will Delete Before Completeion
const Test = () => {
  // const cookies = cookie.parse(document.cookie);
  // const [users, setUsers] = useState([]);

  // const [avatar, setAvatar] = useState("");

  // // const fetchUsers = async () => {
  // //   await axios.get("http://localhost:4001/users").then((res) => {
  // //     console.log(res.data);
  // //     setUsers(res.data);
  // //   });
  // // };

  // const fetchUsersHeaders = async () => {
  //   await axios
  //     .get("http://localhost:4001/users", {
  //       headers: { Authorization: `Bearer ${cookies.token}` },
  //     })
  //     .then((res) => {
  //       setUsers(res.data);
  //     });
  // };

  // const fetchAvatar = async () => {
  //   await axios
  //     .get(`https://robohash.org/${users[0]?.username}`)
  //     .then((res) => {
  //       setAvatar(res.config.url);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching avatar:", error);
  //     });
  // };

  // useEffect(() => {
  //   // fetchUsers();
  //   fetchUsersHeaders();
  //   fetchAvatar();
  // }, []);
  // console.log(users);

  // return (
  //   <div>
  //     <h1>Welcome, {users[0]?.username}</h1>
  //     <h1>User ID: {users[0]?.id}</h1>
  //     {avatar && (
  //       <img
  //         src={avatar}
  //         alt="robot"
  //         style={{ height: "50px", width: "50px", borderRadius: "50%" }}
  //       />
  //     )}
  //   </div>
  // );
  const [vote, setVote] = useState(0);
  const storedUsername = localStorage.getItem("username");

  const handleVote = async () => {
    try {
      const response = await axios.post("http://localhost:4001/rating", {
        username: storedUsername,
        vote: vote,
      });
      console.log("Rating created:", response.data);
    } catch (error) {
      console.error("Error creating rating:", error);
    }
  };

  const handleDeleteVote = async () => {
    try {
      const response = await axios.delete("http://localhost:4001/gamerating", {
        data: {
          username: storedUsername,
        },
      });
      console.log("Rating deleted:", response.data);
    } catch (error) {
      console.error("Error deleting rating:", error);
    }
  };

  useEffect(() => {
    // Check if the user has already voted
    const fetchUserVote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/gamerating/${storedUsername}`
        );
        if (response.data) {
          // User has voted
          setVote(response.data.vote);
        }
      } catch (error) {
        console.error("Error fetching user vote:", error);
      }
    };

    fetchUserVote();
  }, [storedUsername]);

  return (
    <div>
      <h4>Rate the game:</h4>
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => setVote(value)}
          style={{ background: vote === value ? "green" : "transparent" }}
        >
          {value}
        </button>
      ))}
      {vote ? (
        <button onClick={handleDeleteVote}>Delete Vote</button>
      ) : (
        <button onClick={handleVote}>Submit</button>
      )}
    </div>
  );
};

export default Test;
