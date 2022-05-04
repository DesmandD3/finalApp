import TestButton from "../comps/testButton";
import { num, changeNum } from "../data/globalData";
import Charity from "../comps/Charity";

export default function test() {
  return (
    <div>
      <h1>Testing stuff</h1>
      <TestButton />
      <Charity />
      <Charity />
      <Charity />
    </div>
  );
}
