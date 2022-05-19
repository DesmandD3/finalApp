import styled from "styled-components";

const TextSteal = styled.div`
  width: auto;
  height: auto;
  background-color: #41658a;
  color: #fefae0;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  position: relative;
  left: 1px;
  top: 310px;
  z-index: 2;
`;

export default function TextStealing() {
  return (
    <div>
      <TextSteal>
        I could resort to stealing to get by, but that quickly leads down the
        crime path. Street youth face terrible challenges and are more likely to
        engage in crime. Often they are victims of crime. Criminal activity is
        not an option for anyone.
      </TextSteal>
      <TextSteal>Let's see what my level of danger is.</TextSteal>
    </div>
  );
}
