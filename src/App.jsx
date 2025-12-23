import React from "react";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Bag from "./routes/Bag";
import FetchItems from "./components/FetchItems";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "./components/LoadingSpinner";
import { useSelector } from "react-redux";

import OrderPlaced from "./components/OrderPlaced";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />

      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/donepayment" element={<OrderPlaced />} />
        </Routes>
      )}

      <Footer />
    </>
  );
};

export default App;
