import { useState } from "react";

export default function EquipmentSelector({ equipment, onChange }) {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    let updated = selected.includes(id)
      ? selected.filter((x) => x !== id)
      : [...selected, id];

    setSelected(updated);
    onChange(updated);
  }

  return (
    <div>
      <h3>Select Equipment</h3>
      {equipment.map((e) => (
        <div key={e.id}>
          <input
            type="checkbox"
            onChange={() => toggle(e.id)}
            checked={selected.includes(e.id)}
          />
          {e.name} (Qty {e.quantity})
        </div>
      ))}
    </div>
  );
}
