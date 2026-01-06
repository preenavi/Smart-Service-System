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
    <>
      <h3>Create Service Request</h3>

      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="text"
          placeholder="Enter service title"
          value={serviceTitle}
          onChange={(e) => setServiceTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          style={{ width: "100%", padding: "8px" }}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <select
          style={{ width: "100%", padding: "8px" }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br /><br />

        <button
         style={{
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  }} 
        type="submit">Submit Request</button>
      </form>
    </>
  );
}

export default RequestForm;
