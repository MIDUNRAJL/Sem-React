import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: skyblue;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  border: 2px solid black;
  background-color: ${({ variant }) => {
    if (variant === "primary") {
      return "rose";
    }
    if (variant === "secondary") {
      return "gold";
    }
    return "red";
  }};
  color: ${({ variant }) => {
    if (variant === "primary") {
      return "red";
    }
    if (variant === "secondary") {
      return "pink";
    }
    return "grey";
  }};
  width: 30%;
  height: 125px;
  font-size: 40px;
  border-radius: 18px;
  cursor: pointer;
`;

export const DiffButton = styled(StyledButton)`
  border: none;
  width: 40%;
`;