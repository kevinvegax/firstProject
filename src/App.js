import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Obtener items desde Supabase
  const fetchItems = async () => {
    const { data, error } = await supabase.from("items").select("*");
    if (error) console.log(error);
    else if (data) setItems(data); // Verificamos que data exista
  };

  // Agregar un nuevo item
  const addItem = async () => {
    if (!newItem) return;

    // Insertar y seleccionar el registro insertado
    const { data, error } = await supabase
      .from("items")
      .insert([{ name: newItem }])
      .select(); // <-- importante: devuelve el array insertado

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      setItems([...items, ...data]); // Solo si data existe
    }

    setNewItem("");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mi App con Supabase</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Nuevo item"
      />
      <button onClick={addItem}>Agregar</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
