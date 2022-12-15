import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
import NavBar from "./NavBar";
// import Service from "./component/Service";
// import User from "./component/User";
import "./navigation.css";
import Search from "./Search";
import Sresult from "./Sresult";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} /> */}
          {/* <Route path="/Error" element={<Error />} /> */}
          <Route path="/Search" element={<Search />} />
          <Route path="/Sresult" element={<Sresult />} />
          {/* <Route path="/User/:fname/:lname" element={<User />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
