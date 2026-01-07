import { useNavigate } from "react-router-dom";

function Dashboard({ children, setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate("/");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Dashboard</h2>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ padding: "30px" }}>{children}</div>
    </div>
  );
}

export default Dashboard;
