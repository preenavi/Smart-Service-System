import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RequestForm from "./components/RequestForm";
import RequestList from "./components/RequestList";

function App() {
  const [serviceTitle, setServiceTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [requests, setRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceRequest = {
      id: Date.now(),
      title: serviceTitle,
      description,
      priority,
      status: "OPEN",
    };

    setRequests([...requests, serviceRequest]);

    setServiceTitle("");
    setDescription("");
    setPriority("Low");
  };

  const updateStatus = (id, newStatus) => {
  const updatedRequests = requests.map((req) =>
    req.id === id ? { ...req, status: newStatus } : req
  );

  setRequests(updatedRequests);
};


  return (
  <Routes>
    <Route path="/" element={<Login />} />

    <Route
      path="/dashboard"
      element={
        <Dashboard>
          <Header title="Smart Service Request System" />

          <RequestForm
            serviceTitle={serviceTitle}
            setServiceTitle={setServiceTitle}
            description={description}
            setDescription={setDescription}
            priority={priority}
            setPriority={setPriority}
            handleSubmit={handleSubmit}
          />

          <RequestList
            requests={requests}
            updateStatus={updateStatus}
          />

          <Footer />
        </Dashboard>
      }
    />
  </Routes>
);
}

export default App;
