const primaryBtn = {
  padding: "8px 14px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "10px",
};

const dangerBtn = {
  padding: "8px 14px",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

function RequestList({ requests = [], updateStatus, role }) {
  return (
    <ul style={{ padding: 0 }}>
      {requests.length === 0 ? (
        <p>No requests available</p>
      ) : (
        requests.map((req) => (
          <li
            key={req.id}
            style={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "6px",
              marginBottom: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              listStyle: "none",
            }}
          >
            <strong>{req.title}</strong>
            <br />
            {req.description}
            <br /><br />

            Priority: <b>{req.priority}</b> | Status: <b>{req.status}</b>

            <br /><br />

            {(role === "TECHNICIAN" || role === "ADMIN") && (
              <>
                <button
                  style={primaryBtn}
                  disabled={req.status !== "OPEN"}
                  onClick={() =>
                    updateStatus(req.id, "IN_PROGRESS")
                  }
                >
                  In Progress
                </button>

                <button
                  style={dangerBtn}
                  disabled={req.status === "CLOSED"}
                  onClick={() =>
                    updateStatus(req.id, "CLOSED")
                  }
                >
                  Close
                </button>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
}

export default RequestList;
