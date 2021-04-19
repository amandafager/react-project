import React from "react";
import { Router } from "@reach/router";
import Home from "../../pages/Home/index.js";
import Something from "../../pages/Something/index.js";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Router>
          <Home path="/Search" />
          <Something path="/Random" />
        </Router>
      </Layout>
    </>
  );
}

export default App;
