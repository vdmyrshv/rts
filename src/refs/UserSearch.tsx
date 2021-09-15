import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  // How to do ref!
  // CTRL/CMD and click on the element type to find the correct element interface
  // because when component mounts ref might be null, set bitwise or in type declaration to null and the default ref value to null
  const inputRef = useRef<HTMLInputElement | null>(null);
  // IF NOT SURE OF ELEMENT TYPE YOU CAN DO THIS, BUT IT IS NOT RECOMMENDED IN PROD CODE, MORE FOR PROTOTYPING
  // const inputRef = useRef<any>(null);
  // type inference for useState
  const [name, setName] = useState("");
  // type annotation using generics on what the value will  be
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // this is called a type guard - early check and negative return if negative case
    if (!inputRef.current) return;

    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    const foundUser = users.find((user) => user.name === name);

    setUser(foundUser);

    console.log(foundUser);
  };

  return (
    <div>
      <input
        ref={inputRef}
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
