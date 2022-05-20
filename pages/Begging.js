import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import TextBegging from "../comps/Text5_Begbubble";
import Beg2 from "../comps/Beg2";
import Lamp from "../comps/Lamp";
import { motion } from "framer-motion";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 55%,
    #758998 55%,
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
  const BegVar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <Leafs />
      <FullPage>
        <Navbar />
        <Moon />
        <Lamp />
        <motion.div variants={BegVar} initial="hidden" animate="visible">
          <Beg2 />
        </motion.div>
        <TextBegging />
        <SmallBackbutton path="/GetBy" />
        <SmallNextbutton path="/5thpage" />
      </FullPage>
    </div>
  );
}
