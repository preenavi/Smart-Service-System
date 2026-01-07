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

  // 🔹 Derived dashboard metrics
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
                  borderRadius: "16px",
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

              {/* ADMIN DASHBOARD */}
              {role === "ADMIN" && (
                <div style={{ marginBottom: "40px" }}>
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
                    {[
                      {
                        title: "Total Requests",
                        value: totalRequests,
                        color: "#2563eb",
                      },
                      {
                        title: "Open Requests",
                        value: openRequests,
                        color: "#1e40af",
                      },
                      {
                        title: "In Progress",
                        value: inProgressRequests,
                        color: "#6b21a8",
                      },
                      {
                        title: "Closed Requests",
                        value: closedRequests,
                        color: "#374151",
                      },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: "white",
                          padding: "22px",
                          borderRadius: "16px",
                          boxShadow:
                            "0 8px 20px rgba(0,0,0,0.12)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          transform: "translateY(0)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-6px) scale(1.03)";
                          e.currentTarget.style.boxShadow =
                            "0 16px 40px rgba(0,0,0,0.18)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 20px rgba(0,0,0,0.12)";
                        }}
                      >
                        <h4>{card.title}</h4>
                        <p
                          style={{
                            fontSize: "28px",
                            fontWeight: "700",
                            color: card.color,
                          }}
                        >
                          {card.value}
                        </p>
                      </div>
                    ))}
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
