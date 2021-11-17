import React from "react";
import OrderDashboard  from "./components/OrderDashboard";
import { StyledEngineProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import OrderForm from "./components/OrderForm";

function App() {
  return (
      <>
          <BrowserRouter>
              <main>
                  <Container maxWidth="lg">
                      <Routes>
                          <Route path="/view-orders" element={<OrderForm />} />
                          <Route path="/create-orders" element={<OrderForm />} />
                          <Route path="/view-transactions" element={<OrderForm />} />
                      </Routes>
                  </Container>
              </main>
          </BrowserRouter>
          <StyledEngineProvider injectFirst>
              <OrderDashboard />
          </StyledEngineProvider>
      </>
  );
}

export default App;
