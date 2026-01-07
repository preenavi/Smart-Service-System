import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RequestForm from "./components/RequestForm";
import RequestList from "./components/RequestList";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [serviceTitle, setServiceTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [requests, setRequests] = useState([]);
  const [role, setRole] = useState(null);

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
      <Route path="/" element={<Login setRole={setRole} />} />

      <Route
        path="/dashboard"
        element={
          role ? (
            <Dashboard setRole={setRole}>
              <Header />

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

              <h3 style={{ marginTop: "30px" }}>
                {role === "USER"
                  ? "My Requests"
                  : role === "TECHNICIAN"
                  ? "Assigned Requests"
                  : "All Service Requests"}
              </h3>

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
