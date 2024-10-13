
import { ThemeProvider } from "@/components/theme-provider"
import './index.css'
import Home from "@/pages/Home"


function App() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="">
          <Home />
      </div>
      </ThemeProvider>
  )
}

export default App
