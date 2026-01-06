function RequestList({ requests, updateStatus }) {
  return (
    <>
      <h3>Service Requests</h3>

      {requests.length === 0 ? (
        <p>No requests created yet</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li
              key={req.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                listStyle: "none",
              }}
            >
              {/* TITLE */}
              <strong>{req.title}</strong>
              <br />

              {/* DESCRIPTION */}
              <span>{req.description}</span>
              <br /><br />

              {/* PRIORITY + STATUS */}
              Priority:{" "}
              <span
                style={{
                  color:
                    req.priority === "High"
                      ? "red"
                      : req.priority === "Medium"
                      ? "orange"
                      : "green",
                  fontWeight: "bold",
                }}
              >
                {req.priority}
              </span>{" "}
              | Status:{" "}
              <span
                style={{
                  color:
                    req.status === "OPEN"
                      ? "blue"
                      : req.status === "IN_PROGRESS"
                      ? "purple"
                      : "gray",
                  fontWeight: "bold",
                }}
              >
                {req.status}
              </span>

              <br /><br />

              {/* ACTION BUTTONS */}
              <button
                style={{ marginRight: "10px" }}
                disabled={req.status !== "OPEN"}
                onClick={() => updateStatus(req.id, "IN_PROGRESS")}
              >
                In Progress
              </button>

              <button
                disabled={req.status === "CLOSED"}
                onClick={() => updateStatus(req.id, "CLOSED")}
              >
                Close
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default RequestList;
