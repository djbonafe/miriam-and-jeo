import "./App.css";
import Layout from "./layouts/MainLayout";
import MainContent from "./pages/OurStory";
import AuthProvider from "./shared/context/AuthProvider";
import AttendanceConfirmation from "./pages/RSVP";
import Login from "./components/Login";
import Gallery from "./pages/Gallery";
import WeddingDetails from "./pages/WeddingDetails";
import "./styles.css";
import "./queries.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RSVP from "./pages/RSVP";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AuthProvider>
    <AppProvider>
    <Router>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/WeddingDetails" element={<WeddingDetails />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/RSVP" element={<RSVP />} />
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
    </AppProvider>
    </AuthProvider>
  );
}

export default App;
