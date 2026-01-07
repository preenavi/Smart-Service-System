const primaryBtn = {
  padding: "8px 14px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px",
};

const dangerBtn = {
  padding: "8px 14px",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const getStatusStyle = (status) => {
  switch (status) {
    case "OPEN":
      return { backgroundColor: "#dbeafe", color: "#1e40af" };
    case "IN_PROGRESS":
      return { backgroundColor: "#ede9fe", color: "#6b21a8" };
    case "CLOSED":
      return { backgroundColor: "#e5e7eb", color: "#374151" };
    default:
      return {};
  }
};

function RequestList({ requests = [], updateStatus, role }) {
  return (
    <>
      {requests.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
            color: "#6b7280",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            No Service Requests Yet
          </h3>
          <p>
            {role === "USER"
              ? "Create a new service request to get started."
              : "No service requests are currently assigned."}
          </p>
        </div>
      ) : (
        <ul style={{ padding: 0 }}>
          {requests.map((req) => (
            <li
              key={req.id}
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "16px",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
                listStyle: "none",
              }}
            >
              {/* HEADER ROW */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h4 style={{ margin: 0 }}>{req.title}</h4>

                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    ...getStatusStyle(req.status),
                  }}
                >
                  {req.status.replace("_", " ")}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  margin: "0 0 12px",
                  color: "#4b5563",
                }}
              >
                {req.description}
              </p>

              {/* FOOTER ROW */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    color:
                      req.priority === "High"
                        ? "#dc2626"
                        : req.priority === "Medium"
                        ? "#d97706"
                        : "#16a34a",
                  }}
                >
                  Priority: {req.priority}
                </span>

                {(role === "TECHNICIAN" ||
                  role === "ADMIN") && (
                  <div>
                    <button
                      style={primaryBtn}
                      disabled={req.status !== "OPEN"}
                      onClick={() =>
                        updateStatus(
                          req.id,
                          "IN_PROGRESS"
                        )
                      }
                    >
                      In Progress
                    </button>

                    <button
                      style={dangerBtn}
                      disabled={req.status === "CLOSED"}
                      onClick={() =>
                        updateStatus(
                          req.id,
                          "CLOSED"
                        )
                      }
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default RequestList;
