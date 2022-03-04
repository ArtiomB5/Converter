import styled from "styled-components";
import * as common from "../../common";

export const inputWrapper = styled(common.flexColumn)`
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const webflofInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
`;

export const input = styled.input`
  flex-grow: 1;
  color: #bfd2ff;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881a1;
  }
`;
