import StartButton from "../comps/start-button";
import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon2 from "../comps/Moon2";
import Navbar from "../comps/nav/navbar";
import AboutButton from "../comps/aboutButton";
import Path from "../comps/path";
import React from "react";
import { motion } from "framer-motion";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 70%,
    #758998 70%,
    #758998 100%
  );
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  max-width: auto;
  height: 844px;
  overflow: hidden;
`;

const Header = styled.h1`
  font-size: 48px;
  margin-top: 180px;
  color: fefae0;
  color: #fefae0;
  z-index: 3;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  color: #fefae0;
  margin-bottom: 200px;
  z-index: 3;
`;

export default function Start() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <Leafs />
      <FullPage>
        <Navbar />
        <Moon2 />
        <Header>Pathfinders</Header>
        <PageTitle>Imagine the Story</PageTitle>
        <motion.div>
          <StartButton path="/1stpage" />
        </motion.div>
        <AboutButton path="/aboutus" />
        <Path />
      </FullPage>
    </motion.div>
  );
}
