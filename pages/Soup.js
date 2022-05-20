import Leafs from "../comps/leafs";
import styled from "styled-components";
import Moon from "../comps/Moon";
import SmallNextbutton from "../comps/smNext";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Soup1 from "../comps/Soup1";
import TextSoupKitchens from "../comps/Text5_Soupbubble";
import { motion } from "framer-motion";
const FullPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap");
  background: linear-gradient(
    to bottom,
    #7d98a1 0%,
    #7d98a1 7.5%,
    #003472 8%,
    #003472 50%,
    #758998 50%,
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
  const SoupVar = {
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
        <motion.div variants={SoupVar} initial="hidden" animate="visible">
          <Soup1 />
        </motion.div>
        <TextSoupKitchens />
        <SmallBackbutton path="/GetBy" />
        <SmallNextbutton path="/5thpage" />
      </FullPage>
    </div>
  );
}
