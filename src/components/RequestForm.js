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
        padding: "25px",
        borderRadius: "10px",
        maxWidth: "520px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* TITLE */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Service Title
          </label>
          <input
            type="text"
            value={serviceTitle}
            onChange={(e) =>
              setServiceTitle(e.target.value)
            }
            placeholder="Eg: Laptop repair"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
            }}
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe the issue in detail"
            rows={4}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
              resize: "none",
            }}
            required
          />
        </div>

        {/* PRIORITY */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
            }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
