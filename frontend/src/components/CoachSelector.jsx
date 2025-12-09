
export default function CoachSelector({ coaches, value, onChange }) {
  return (
    <div>
      <h3>Select Coach (optional)</h3>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">No Coach</option>
        {coaches.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
