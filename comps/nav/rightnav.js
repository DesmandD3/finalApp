import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-block-start:0;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 150px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:1;
    li {
      color: #ffff;
    }
  }
`;

const RightNav = ({ open }) => {
  const r = useRouter();
  return (
    <Ul open={open}>
      <li onClick={() => r.replace({ pathname: "/start" })}>Home</li>
      <li onClick={() => r.replace({ pathname: "/start" })}>About Us</li>
    </Ul>
  );
};

export default RightNav;
