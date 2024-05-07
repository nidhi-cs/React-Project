import { useEffect } from "react";
const API = "https://jsonplaceholder.typicode.com/";
const fetchUsers = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

const App = () => {
  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <h1>React Table</h1>
    </>
  );
};

export default App;
