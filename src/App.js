import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState();
  const [pic, setPic] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        console.log(obj.results[0].name.first);
        setData(obj.results[0].name.first);
        console.log(obj.results[0].picture.large);
        setPic(obj.results[0].picture.large);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{data}</h1>
      <img src={pic} />
    </div>
  );
}
