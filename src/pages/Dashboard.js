import { useNavigate } from "react-router-dom";

function Dashboard({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={handleLogout}
        style={{
          float: "right",
          padding: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h2>Dashboard</h2>
      {children}
    </div>
  );
}

export default Dashboard;
