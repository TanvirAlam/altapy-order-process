import React from "react";
import Dashboard  from "./components/Dashboard";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
      <>
          <StyledEngineProvider injectFirst>
              <Dashboard />
          </StyledEngineProvider>
      </>
  );
}

export default App;
