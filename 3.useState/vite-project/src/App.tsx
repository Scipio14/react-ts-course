import "./App.css";
import { useState } from "react";
import { User } from "./types/interfaces";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () =>
    setUser({
      name: "Scipio",
      age: 35,
      country: "SPQR",
      address: {
        street: "Via Flaminia",
        number: 35,
        zip: "2134",
      },
      admin: false,
    });
  return (
    <>
      <button onClick={fetchUser}>Fetch user</button>
      {user && <p>{`Welcome ${user.name} from ${user.country}`}</p>}
    </>
  );
}

export default App;
