import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RequestForm from "./components/RequestForm";
import RequestList from "./components/RequestList";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [serviceTitle, setServiceTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [requests, setRequests] = useState([]);
  const [role, setRole] = useState(null);

  const totalRequests = requests.length;
const openRequests = requests.filter(
  (r) => r.status === "OPEN"
).length;
const inProgressRequests = requests.filter(
  (r) => r.status === "IN_PROGRESS"
).length;
const closedRequests = requests.filter(
  (r) => r.status === "CLOSED"
).length;


  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceRequest = {
      id: Date.now(),
      title: serviceTitle,
      description,
      priority,
      status: "OPEN",
    };

    setRequests((prev) => [...prev, serviceRequest]);

    setServiceTitle("");
    setDescription("");
    setPriority("Low");
  };

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<Login setRole={setRole} />} />

      {/* DASHBOARD (PROTECTED) */}
      <Route
        path="/dashboard"
        element={
          role ? (
            <Dashboard setRole={setRole}>
              {/* HERO SECTION */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1, #a855f7)",
                  color: "white",
                  padding: "40px",
                  borderRadius: "14px",
                  marginBottom: "30px",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.15)",
                }}
              >
                <h1
                  style={{
                    marginBottom: "10px",
                    fontSize: "32px",
                  }}
                >
                  {role === "ADMIN"
                    ? "Admin Dashboard"
                    : role === "TECHNICIAN"
                    ? "Technician Workspace"
                    : "My Service Requests"}
                </h1>

                <p
                  style={{
                    fontSize: "16px",
                    maxWidth: "600px",
                    lineHeight: "1.6",
                  }}
                >
                  {role === "ADMIN"
                    ? "Monitor all service requests, track progress, and manage the system efficiently."
                    : role === "TECHNICIAN"
                    ? "View assigned service requests and update their status in real time."
                    : "Create, track, and manage your service requests easily from one place."}
                </p>
              </div>

              {/* USER ONLY – CREATE REQUEST */}
              {role === "USER" && (
                <>
                  <h3>Create New Service Request</h3>
                  <RequestForm
                    serviceTitle={serviceTitle}
                    setServiceTitle={setServiceTitle}
                    description={description}
                    setDescription={setDescription}
                    priority={priority}
                    setPriority={setPriority}
                    handleSubmit={handleSubmit}
                  />
                </>
              )}

              {/* ADMIN DASHBOARD SHELL */}
{/* ADMIN DASHBOARD SHELL */}
{role === "ADMIN" && (
  <div
    style={{
      marginTop: "20px",
      marginBottom: "40px",
    }}
  >
    <h3 style={{ marginBottom: "16px" }}>
      System Overview
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {/* TOTAL */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h4>Total Requests</h4>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#2563eb",
          }}
        >
          {totalRequests}
        </p>
      </div>

      {/* OPEN */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h4>Open Requests</h4>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e40af",
          }}
        >
          {openRequests}
        </p>
      </div>

      {/* IN PROGRESS */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h4>In Progress</h4>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#6b21a8",
          }}
        >
          {inProgressRequests}
        </p>
      </div>

      {/* CLOSED */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h4>Closed Requests</h4>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#374151",
          }}
        >
          {closedRequests}
        </p>
      </div>
    </div>
  </div>
)}



              {/* LIST TITLE */}
              <h3 style={{ marginTop: "30px" }}>
                {role === "USER"
                  ? "My Requests"
                  : role === "TECHNICIAN"
                  ? "Assigned Requests"
                  : "All Service Requests"}
              </h3>

              {/* REQUEST LIST */}
              <RequestList
                requests={requests}
                updateStatus={updateStatus}
                role={role}
              />

              <Footer />
            </Dashboard>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
