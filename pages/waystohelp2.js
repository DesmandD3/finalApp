import Leafs from "../comps/leafs";
import styled from "styled-components";
import SmallBackbutton from "../comps/smBack";
import Navbar from "../comps/nav/navbar";
import Shadow from "../comps/Shadow";
import Charity from "../comps/Charity";
import Charity2 from "../comps/Charity2";
import Charity3 from "../comps/Charity3";
import Text7bubble from "../comps/Text7bubble";
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
  const ShadowVar = {
    hidden: { opacity: 0},
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
        <motion.div variants={ShadowVar} initial="hidden" animate="visible">
        <Shadow/>
        </motion.div>
        <Text7bubble />
        <Charity />
        <Charity2 />
        <Charity3 />
        <SmallBackbutton path="/waystohelp" />
      </FullPage>
    </div>
  );
}
