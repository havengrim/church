import { ThemeProvider } from "@/components/theme-provider"
import './index.css'
import Home from "@/pages/Home"
import AnnouncementsMain from "@/pages/Announcements/announcementsMain"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<AnnouncementsMain />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
