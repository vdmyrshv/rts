import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  // using generics to type annotate that the useState will be an array of strings
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName('')
    setGuests(prevGuests => [...prevGuests, name])
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map(guest => 
          <li key={guest}>{guest}</li>)}
      </ul>

      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

GuestList.displayName = 'GuestListComponent'

export default GuestList;
