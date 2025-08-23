import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🚀 Mi primera app en React</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "1rem" }}>
        Decrementar
      </button>
    </div>
  );
}

export default App;
