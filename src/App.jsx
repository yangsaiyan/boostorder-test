import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import EInvoice from "./pages/eInvoice/eInvoice";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route
        path="integration"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="integration/invoice"
        element={
          <Layout>
            <EInvoice />
          </Layout>
        }
      />
      <Route
        path="integration/invoice"
        element={
          <Layout>
            <EInvoice />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
