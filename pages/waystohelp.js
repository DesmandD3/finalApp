import Navbar from "../comps/nav/navbar";
import Charity from "../comps/Charity";
import Charity2 from "../comps/Charity2";
import Charity3 from "../comps/Charity3";
import WaysTextBubble from "../comps/WaysTextBubble";

export default function Ways() {
  return (
    // temp div, can be removed
    <div>
      <Navbar />
      <WaysTextBubble />
      <Charity />
      <Charity2 />
      <Charity3 />
    </div>
  );
}
