import React from "react";
import OrderDashboard  from "./components/OrderDashboard";
import { StyledEngineProvider } from '@mui/material/styles';
import {
    Routes,
    Route
} from "react-router-dom";

import OrderForm from "./components/OrderForm";
import OrderView from "./components/OrderView";
import OrderTransactions from "./components/OrderTransactions";

function App() {
  return (
      <>
          <StyledEngineProvider injectFirst>
              <OrderDashboard />
          </StyledEngineProvider>
          <Routes>
              <Route path="/view-orders" element={<OrderView />} />
              <Route path="/create-orders" element={<OrderForm />} />
              <Route path="/view-transactions" element={<OrderTransactions />} />
          </Routes>
      </>
  );
}

export default App;
