import { useNavigate } from "react-router-dom";

function Dashboard({ children, setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER BAR */}
      <div
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Smart Service Request Management System</h2>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ flex: 1, padding: "30px" }}>{children}</div>
    </div>
  );
}

export default Dashboard;
