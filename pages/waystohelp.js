import Leafs from "../comps/leafs";
import styled from "styled-components";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Man4 from "../comps/man4";
import Text6bubble from "../comps/Text6bubble";
import Suit from "../comps/Suit";
import { num } from "../data/globalData";
import SmallNextbutton from "../comps/smNext";
import Yhouse from "../comps/Yhouse";
import { motion } from "framer-motion";

const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #00a4e4 8%,
    #00a4e4 60%,
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
  const YhouseVar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const SuitVar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 5, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <Leafs />
      <FullPage>
        <Navbar />
        <motion.div variants={YhouseVar} initial="hidden" animate="visible">
          <Yhouse />
        </motion.div>
        <Man4 />
        <motion.div variants={SuitVar} initial="hidden" animate="visible">
          <Suit />
        </motion.div>
        <Text6bubble />
        <SmallNextbutton path="/waystohelp2" />
        <SmallBackbutton path="/5thpage" />
      </FullPage>
    </div>
  );
}
