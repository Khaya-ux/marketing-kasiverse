App.jsx
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import ContextProvider from "./context/ContextProvider.jsx";
// Import pages
import Stores from "./pages/Stores.jsx";
import ContactForm from "./components/ContactForm.jsx"
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/contactform" element={<ContactForm />} />
        

        
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

// Export App
export default App;