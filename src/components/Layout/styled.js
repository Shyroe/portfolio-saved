import styled, { css } from "styled-components";

import { Cog } from "@styled-icons/entypo/";
import V from "../../styles/variables";
import media from "styled-media-query";
export const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  /* border: 2px solid goldenrod; */
`;

export const IconCog = styled(Cog)`
  width: 0.9rem;
  height: 0.9rem;
  color: ${V.light};
`;

export const SkeletonWrapper = css`
  width: 100%;
  height: 1.5rem;
  cursor: pointer;
  border: 1px solid ${V.lightGrey};
  margin-bottom: 0.2rem;
`;

export const WrapperIcon = styled.div`
  ${SkeletonWrapper}
  background-color: ${V.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${V.lightGrey}; */
  /* margin-top: 0.5rem; */
`;

export const WrapperThemes = styled.div`
  width: 100%;
  height: auto;
  /* display: ${(props) => (props.enableTheme == true ? "block" : "none")}; */
  /* border: 2px solid goldenrod; */
`;

export const ThemePrimary = styled.div`
  ${SkeletonWrapper}
  background-color: ${V.resumeThemes.primary};
`;
export const ThemeSecondary = styled.div`
${SkeletonWrapper}
  background-color: ${V.resumeThemes.secondary};
`;
export const ThemeTertiary = styled.div`
  ${SkeletonWrapper}
  background-color: ${V.resumeThemes.tertiary};
`;
export const ThemeQuaternary = styled.div`
  ${SkeletonWrapper}
  background-color: ${V.resumeThemes.quaternary};
`;

export const WrapperConfigTheme = styled.div`
  position: absolute;
  /* top: 10%;
  left: -5rem; */
  top: 35%;
  left: 15%;
  width: 2rem;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  /* background-color: ${V.primary}; */
  /* border: 2px solid blueviolet; */

  ${media.lessThan("large")`
    /* margin-right: auto; */
    left: 0%;
  `}
`;
