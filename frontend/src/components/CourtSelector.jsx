
export default function CourtSelector({ courts, value, onChange }) {
  return (
    <div>
      <h3>Select Court</h3>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- choose court --</option>
        {courts.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name} ({c.type})
          </option>
        ))}
      </select>
    </div>
  );
}
