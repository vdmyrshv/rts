import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  // type inference for useState
  const [name, setName] = useState("");
  // type annotation using generics on what the value will  be
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleClick = () => {
    const foundUser = users.find((user) => user.name === name);

    setUser(foundUser);

    console.log(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

UserSearch.displayName = "User Search Component";

export default UserSearch;
