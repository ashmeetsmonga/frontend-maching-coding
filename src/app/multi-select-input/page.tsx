"use client";
import React, { useEffect, useState } from "react";
import "./multi-select-input.css";
import { User } from "./types";
import { MdDelete } from "react-icons/md";

const MultiSelectInputPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User[]>([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set<string>());

  const fetchUsers = () => {
    if (searchTerm.trim() !== "")
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.users);
          setSuggestions(data.users);
        })
        .catch((e) => console.log(e));
    else setSuggestions([]);
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser([...selectedUser, user]);
    setSelectedUserSet((prev) => {
      prev.add(user.email);
      return prev;
    });
  };

  const handleDeleteUser = (user: User) => {
    setSelectedUser((prev) => {
      return prev.filter((u) => u.email !== user.email);
    });
    setSelectedUserSet((prev) => {
      prev.delete(user.email);
      return prev;
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [searchTerm]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="multi-select-input">
          {selectedUser.map((user, idx) => (
            <span className="pill" key={user.email}>
              <img src={user.image} />
              {user.firstName} {user.lastName} <MdDelete onClick={() => handleDeleteUser(user)} style={{ cursor: "pointer" }} />
            </span>
          ))}
          <input type="text" placeholder="Search for a User..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <ul className="search-suggestions-container">
          {suggestions.map(
            (user, idx) =>
              !selectedUserSet.has(user.email) && (
                <li key={user.email} onClick={() => handleSelectUser(user)}>
                  <img src={user.image} alt="User" />
                  {user.firstName} {user.lastName}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelectInputPage;
