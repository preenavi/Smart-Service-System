function RequestForm({
  serviceTitle,
  setServiceTitle,
  description,
  setDescription,
  priority,
  setPriority,
  handleSubmit,
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "500px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="text"
          placeholder="Service Title"
          value={serviceTitle}
          onChange={(e) => setServiceTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          style={{ width: "100%", padding: "8px" }}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <select
          style={{ width: "100%", padding: "8px" }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br /><br />

        <button
          style={{
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
