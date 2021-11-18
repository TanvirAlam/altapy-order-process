import React from "react";
import Dashboard  from "./components/Dashboard";
import { StyledEngineProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import OrderDetails from "./components/OrderDetails";
import OrderTransactions from "./components/OrderTransactions";

function App() {
  return (
      <>
          <StyledEngineProvider injectFirst>
              <Dashboard />
          </StyledEngineProvider>
          <Routes>
              <Route path="/view-orders" element={<OrderDetails />} />
              <Route path="/create-orders" element={<OrderForm />} />
              <Route path="/view-transactions" element={<OrderTransactions />} />
          </Routes>
      </>
  );
}

export default App;
