function RequestList({ requests }) {
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
              <strong>{req.title}</strong>
              <br />
              {req.description}
              <br />
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
              | Status: {req.status}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default RequestList;
