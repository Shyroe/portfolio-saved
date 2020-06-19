import styled, { css } from "styled-components";

import V from "../../styles/variables";

export const SkeletonSocialIcon = css`
  width: 1.5rem;
  /* height: 2.5rem; */
  height: 100%;
  padding-right: 0.2rem;
  color: ${V.lightGrey};
  cursor: pointer;
`;

import { Redo2 } from "@styled-icons/icomoon/";
import { Twitter } from "@styled-icons/boxicons-logos/";
import { Facebook } from "@styled-icons/boxicons-logos/";
import { Linkedin } from "@styled-icons/boxicons-logos/";
import { Whatsapp } from "@styled-icons/boxicons-logos/";

export const WrapperSocialIcon = styled.div`
  width: auto;
  height: auto;
  display: ${(props) => (props.active ? "block" : "none")};
  /* display: flex; */
  /* align-items: stretch; */
  background-color: ${V.primary};
`;

export const WrapperRedo = styled.div`
  width: auto;
  height: auto;
  padding: 0.7rem;
  background-color: ${V.lightGrey};
`;

// export const AdaptRedo = (props) => <Redo {...props} />;
// export const AdaptRedo = styled(Redo);

export const IconRedo = styled(Redo2)`
  width: 0.8rem;
  height: 0.8rem;
  fill: ${V.primary};
  /* cursor: pointer; */
`;

export const WrapperShare = styled.div`
  width: auto;
  height: auto;
  /* border: 2px solid blue; */
  cursor: pointer;
  display: flex;
`;

export const IconTwitter = styled(Twitter)`
  ${SkeletonSocialIcon}
`;
export const IconFacebook = styled(Facebook)`
  ${SkeletonSocialIcon}
`;
export const IconLinkedin = styled(Linkedin)`
  ${SkeletonSocialIcon}
`;
export const IconWhatsapp = styled(Whatsapp)`
  ${SkeletonSocialIcon}
`;

export const WrapperAuthor = styled.div`
  width: 100%;
  height: auto;
  /* margin-top: auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
`;

export const Author = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  /* padding-bottom: 0.8rem; */

  & > h2 {
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.6rem;
    margin-bottom: 0.5rem;
    color: #222;
  }

  & > h4 {
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
    color: #444;
  }
`;
