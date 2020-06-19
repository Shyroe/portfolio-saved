import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  /* border: 2px solid green; */
  padding-top: 15%;

  ${media.lessThan("large")`
    margin: 0 auto;
    width: 80%;
  `}

  ${media.lessThan("medium")`
    margin: 0 auto;
    width: 90%;
  `}
`;
