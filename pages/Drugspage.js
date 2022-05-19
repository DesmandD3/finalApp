import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Text4bubble from "../comps/Text4bubble";
import Drug from "../comps/Drugs";
import Drug2 from "../comps/Drugs2";
import { motion } from "framer-motion";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 65%,
    #758998 65%,
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

export default function Start() {
  const drugVar = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -360,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const drugVar1 = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: -360,
      transition: { duration: 1, ease: "easeInOut", delay: 1 },
    },
  };
  return (
    <div>
      <Leafs />
      <FullPage>
        <Navbar />
        <Moon />
        <motion.div variants={drugVar} initial="hidden" animate="visible">
          <Drug />
        </motion.div>
        <motion.div variants={drugVar1} initial="hidden" animate="visible">
          <Drug2 />
        </motion.div>
        <Text4bubble />
        <SmallBackbutton path="/4thpage" />
        <SmallNextbutton path="/GetBy" />
      </FullPage>
    </div>
  );
}
