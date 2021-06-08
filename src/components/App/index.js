import React from "react";
import { Router } from "@reach/router";
import Home from "../../pages/Home/index.js";
import Suggestion from "../../pages/Suggestion/index.js";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

export default function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Router>
          <Home path="/" />
          <Suggestion path="/drink-suggestion" />
        </Router>
      </Layout>
    </>
  );
}
