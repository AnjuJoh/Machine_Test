import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Dashboard } from "@mui/icons-material";

import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Graph from "./pages/graph";
import DashBoard from "./pages/dashboard";







function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
           <Route path="/" element={<DashBoard/>}/>
           <Route path="/bar"element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/graph" element={<Graph/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;