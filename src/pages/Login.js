import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // dummy login for now
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        style={{ padding: "8px", width: "200px" }}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        style={{ padding: "8px", width: "200px" }}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
