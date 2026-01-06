import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [serviceTitle, setServiceTitle] = useState("");
  const [description, setDescription] = useState("");


  return (
    <div>
      <Header title="Smart Service Request System" />

      <main>
        <h3>Create Service Request</h3>

        <input
          type="text"
          placeholder="Enter service title"
          value={serviceTitle}
          onChange={(e) => setServiceTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter service description"
          value ={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>

        <p>Service Title: {serviceTitle}</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
