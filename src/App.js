import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import Account from "./pages/Account";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import { createContext, useEffect, useState } from "react";
import View from "./pages/View";
import Edit from "./pages/Edit";
import CreateClient from "./pages/CreateClient";
import Client from "./pages/Client";

import TeamCreate from "./pages/TeamCreate";
import Teams from "./pages/Teams";

import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import OrderDetails from "./pages/OrderDetails";

const contextwrap = createContext();

function App() {
  const [dash, setdash] = useState(false);
  const [editid, seteditid] = useState("");
  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      setdash(true);
    }
  }, []);

  return (
    <contextwrap.Provider
      value={{
        pass: [dash, setdash],
        ids: [editid, seteditid],
      }}
    >
      <div className="wrapper  container-fluid p-0">
        <BrowserRouter>
          <Navbar1 />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/addbooks" element={<AddBooks />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/view/:id" element={<View />} />
              <Route path="/create-client" element={<CreateClient />} />
              <Route path="/client" element={<Client />} />
              {/* <Route path="/navbar" element={ <Navbar1/>}/> */}
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/create-customer" element={<CreateCustomer/>}/>
             <Route path="/customer" element={<Customer/>}/> */}
              <Route path="/team-create" element={<TeamCreate />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order-details/:id" element={<OrderDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </contextwrap.Provider>
  );
}

export default App;
export { contextwrap };
