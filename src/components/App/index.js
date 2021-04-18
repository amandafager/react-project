import React from "react";
import { Router } from "@reach/router";
/* import Menu from '../../components/Menu'; */
import Home from "../../pages/Home/index.js";
import Something from "../../pages/Something/index.js";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        {/* <Menu/> */}
        <Router>
          <Home path="/Search" />
          <Something path="/Random" />
        </Router>
      </Layout>
    </>
  );
}

export default App;
