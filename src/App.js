import { useState } from "react";
import "./styles.css";

export default function App() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <label>Status</label>
    </div>
  );
}
