import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setRole }) {
  const [roleValue, setRoleValue] = useState("USER");
  const navigate = useNavigate();

  const handleLogin = () => {
    setRole(roleValue);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#3b82f6,#9333ea)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Login</h2>

        <select
          value={roleValue}
          onChange={(e) => setRoleValue(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="USER">User</option>
          <option value="TECHNICIAN">Technician</option>
          <option value="ADMIN">Admin</option>
        </select>

        <br /><br />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
