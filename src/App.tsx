import { ThemeProvider } from "@/components/theme-provider"
import './index.css'
import Home from "@/pages/Home"
import AnnouncementsMain from "@/pages/Announcements/announcementsMain"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Help from "./pages/Help/Help"


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<AnnouncementsMain />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
