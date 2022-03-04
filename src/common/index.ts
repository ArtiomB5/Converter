import styled from "styled-components";

export const flexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = styled(flexRow)`
  flex-direction: column;
`;
