import styled from "styled-components";

const Leaf = styled.div`
  .container {
    width: 100%;
    height: 100%;
  }
  .leaf {
    width: 25px;
    height: 25px;
    background-color: orange;
    position: absolute;
    top: -25px;
    left: 50%;
    animation: leaf 5s ease-in-out -2s 2;
    transform-origin: center;
    border-radius: 100% 0;
  }
  .leaf:nth-child(1) {
    background-color: orange;
    left: 10%;
    animation-delay: 0;
  }
  .leaf:nth-child(2) {
    background-color: peru;
    left: 20%;
    animation-delay: -5s;
  }
  .leaf:nth-child(3) {
    background-color: maroon;
    left: 30%;
    animation-delay: -3s;
  }
  .leaf:nth-child(4) {
    background-color: orange;
    left: 40%;
    animation-delay: -2.5s;
  }
  .leaf:nth-child(5) {
    background-color: orange;
    left: 50%;
    animation-delay: -4s;
  }
  .leaf:nth-child(6) {
    background-color: orange;
    left: 60%;
    animation-delay: -6s;
  }
  .leaf:nth-child(7) {
    background-color: maroon;
    left: 70%;
    animation-delay: -1.5s;
  }
  .leaf:nth-child(8) {
    background-color: orange;
    left: 80%;
    animation-delay: -2s;
  }

  @keyframes leaf {
    0% {
      transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
    }
    25% {
      transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
    }
    50% {
      transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
    }
    75% {
      transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
    }
    100% {
      transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
    }
  }
`;

export default function Leafs() {
  return (
    <Leaf className="container">
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
      <Leaf className="leaf"></Leaf>
    </Leaf>
  );
}
