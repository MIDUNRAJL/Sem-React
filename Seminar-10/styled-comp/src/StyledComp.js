import { Wrapper, StyledButton, DiffButton } from "./StyledComp1";
import GlobalStyles from "./Global";

const stylecomp2 = () => {
  return (
    <Wrapper>
      <GlobalStyles></GlobalStyles>
      <StyledButton variant="primary" width="full">
        1st Button
      </StyledButton>
      <StyledButton variant="secondary">My Button</StyledButton>
      <DiffButton variant="primary" width="full">
        2nd Button
      </DiffButton>
    </Wrapper>
  );
};

export default stylecomp2;