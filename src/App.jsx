import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout";
import PrivacyPolicy from "./components/privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        {/* <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route> */}
        {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} /> */}
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
