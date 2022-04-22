import SmallBack from "../comps/smBack";
import SmallNext from "../comps/smNext";
import Textbub from "../comps/Textbubble";
import BackButton from "../comps/Back";
import StartButton from "../comps/start-button";
import WayButton from "../comps/waysButton";
import Choice from "../comps/ChoiceButton";
import Links from "../comps/LinkButton";
import CharityButton from "../comps/Charity";
export default function test() {
  return (
    <div>
      <h1>Testing stuff</h1>

      <SmallBack />
      <SmallNext />
      <Textbub />
      <WayButton />
      <BackButton />
      <StartButton />
      <br></br>
      <Choice></Choice>
      <br></br>
      <Links></Links>
      <CharityButton></CharityButton>
    </div>
  );
}
