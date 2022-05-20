import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Text5bubble from "../comps/Text5bubble";
import Alcohol from "../comps/Alcohol";
import { motion } from "framer-motion";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 60%,
    #758998 60%,
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
  const alcoholVar = {
    hidden: { scale: 0, opacity: 0, rotate: 0 },
    visible: {
      rotate: -360,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <Leafs />
      <FullPage>
        <Navbar />
        <Moon />
        <motion.div variants={alcoholVar} initial="hidden" animate="visible">
          <Alcohol />
        </motion.div>
        <Text5bubble />
        <SmallBackbutton path="/4thpage" />
        <SmallNextbutton path="/GetBy" />
      </FullPage>
    </div>
  );
}
