import { Box } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Createpage from "../pages/Createpage";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <>
      <Box minH={"100vh"} padding={"10px"}>
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/create" Component={Createpage} />
          <Route path="/login" element={<h3>Login</h3>} />
          <Route path="/contact" element={<h3>Contact</h3>} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
