import { useState } from "react";

const api = [
  {
    id: 11,
    name: "ahihi",
  },
  {
    id: 22,
    name: "ahoho",
  },
  {
    id: 33,
    name: "kiki",
  },
  {
    id: 44,
    name: "kaka",
  },
  {
    id: 55,
    name: "hehe",
  },
];
function App() {
  const [val, setVal] = useState([]);

  const handlevalue = () => {
    console.log(val);
  };
  const handlechange = (e) => {
    if (!val.includes(e)) {
      setVal([...val, e]);
    } else {
      setVal(
        val.filter((i) => 
          i.id !== e.id
        )
      );
    }
  };
  const handleAllvalue = () => {
    let arr_id = [];
    arr_id = api.map((item) => {
      return item.id;
    });
    setVal(arr_id);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(val)}</h1>
      {api.map((item) => (
        <div key={item.id}>
          <input type="checkbox" onChange={() => handlechange(item)} />
          {item.name}
        </div>
      ))}

      <button onClick={handlevalue}>Get Value</button>
      <button onClick={handleAllvalue}>Select ALL</button>
    </div>
  );
}

export default App;
