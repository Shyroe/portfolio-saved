import styled, { css } from "styled-components";
import V from "../../styles/variables";
import media from "styled-media-query";

//Interests and location icons
import { Airplane, FileVideo } from "@styled-icons/icomoon/";
import { Music, Bicycle, PhoneSquareAlt } from "@styled-icons/fa-solid/";
import { LocationFood } from "@styled-icons/zondicons/";
import { SportsClub, LocationPin } from "@styled-icons/entypo/";
import { EmailOutline } from "@styled-icons/evaicons-outline/";

// group

// export const GroupWrapper = styled.div`
//   /* width: 50%; */
//   width: 60%;
//   /* height: 100%; */
//   height: auto;
//   display: flex;
//   flex-flow: column nowrap;
//   /* border: 2px solid blue; */
//   background-color: #222;
//   color: ${V.lightGrey};
// `;

// export const GroupWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   padding: 2rem 1.5rem;
//   /* border: 2px solid purple; */

// `;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* border: 2px solid green; */
  /* padding: 2rem 1rem; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* border: 2px solid blue; */
  /* padding: 2rem 1rem; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const WrapperEducation = styled.div`
  width: 100%;
  height: auto;
  /* border: 2px solid goldenrod; */
  color: ${V.lightGrey};
  background-color: #222;

  & > h3 {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0.4rem 1.2rem;
  }

  & > div.wrapper-projects {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;

const changeTheme = (theme) => {
  switch (theme) {
    case "primary":
      return V.resumeThemes.primary;
      break;
    case "secondary":
      return V.resumeThemes.secondary;
      break;
    case "tertiary":
      return V.resumeThemes.tertiary;
      break;
    case "quaternary":
      return V.resumeThemes.quaternary;
      break;
    default:
      return V.resumeThemes.primary;
  }
};

//Feito com ternary - sem function
/* color: ${(props) =>
      props.activeTheme == "primary"
        ? V.resumeThemes.primary
        : props.activeTheme == "secondary"
        ? V.resumeThemes.secondary
        : props.activeTheme == "tertiary"
        ? V.resumeThemes.tertiary
        : props.activeTheme == "quaternary"
        ? V.resumeThemes.quaternary
        : V.resumeThemes.primary}; */

export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  /* border: 2px solid orangered; */
`;

export const WrapperResume = styled.div`
  /* width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap; */
  width: 100%;
  height: auto;
  display: flex;
  /* padding: 2rem 0; */
  /* border: 2px solid purple; */
  background-color: ${V.lightGrey};

  ${media.lessThan("medium")`
    flex-direction: column;
    flex-wrap: wrap;
  `}

  & > h3 {
    color: ${(props) => changeTheme(props.activeTheme)};
  }
`;

export const WrapperProfessionalInfo = styled.div`
  /* width: 50%; */
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  background-color: #d4d4d4;
  padding: 1.5rem 1rem;
  /* border: 2px solid blue; */

  & > h2 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${V.darkGrey};
    line-height: 2.2rem;
    font-size: 2.4rem;

    & > span {
      color: ${(props) => changeTheme(props.activeTheme)};
      display: block;
    }
  }

  & > h4 {
    width: auto;
    height: auto;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-weight: bold;
    background-color: ${(props) => changeTheme(props.activeTheme)};
    border-radius: 1rem;
    margin-top: 0.5rem;
    color: ${V.lightGrey};
  }
  & > p {
    color: ${V.darkGrey};
    margin-top: 1rem;
  }
`;

export const WrapperTecnologyInfo = styled.div`
  /* width: 60%; */
  width: 100%;
  height: auto;
  background-color: #222;
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;

  & > div.header-logos {
    width: 100%;
    height: auto;
    display: flex;
    & > div.tech-item {
      width: 100%;
      height: auto;
      display: flex;
      /* margin-left: 0.3rem; */
      /* border: 2px solid green; */
      flex-flow: column nowrap;

      & > div.logo {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        font-size: 1.6rem;
        text-transform: uppercase;
        color: ${V.lightGrey};
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-left: 0.5rem; */
        margin-bottom: 0.5rem;
        border: 5px solid ${(props) => changeTheme(props.activeTheme)};
      }

      & > div.list-niveis {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        /* padding-left: 0.5rem; */
        /* border: 2px solid orangered; */

        & > div:not(:first-child) {
          margin-left: 0.3rem;
        }
        & > div.nivel {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 100%;
          background-color: ${V.lightGrey};
        }
      }
    }
  }
`;

export const WrapperHab = styled.div`
  width: 100%;
  height: auto;
  /* border: 2px solid green; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-top: 2.2rem;

  & > h3 {
    margin-bottom: 1.2rem;
  }

  & > h3 {
    text-transform: uppercase;
    color: ${V.lightGrey};
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 1.4rem;
  }

  /* & > div.hab {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;

    & > span {
      color: ${V.lightGrey};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
    }

    & > div.progressbar {
      width: 60%;
      height: 0.6rem;
      background-color: ${V.lightGrey};
      position: relative;
      border-radius: 0.5rem;
      &::before {
        content: "";
        width: 50%;
        height: 100%;
        background-color: ${(props) => changeTheme(props.activeTheme)};
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  } */
`;

export const HabItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;

  & > span {
    color: ${V.lightGrey};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }

  & > div.progressbar {
    width: 60%;
    height: 0.6rem;
    background-color: ${V.lightGrey};
    position: relative;
    border-radius: 0.5rem;
    &::before {
      content: "";
      /* width: 50%; */
      width: ${(props) => props.size}%;
      height: 100%;
      border-radius: 0.5rem;
      background-color: ${(props) => changeTheme(props.activeTheme)};
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

// contactInfo

export const WrapperContactInfo = styled.div`
  /* width: 50%; */
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background-color: ${V.lightGrey};

  & > div.contactItem {
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 1.3rem;
    align-items: center;
    /* justify-content: space-between; */
    & > h5 {
      color: ${(props) => changeTheme(props.activeTheme)};
      font-size: 0.7rem;
      font-weight: bold;
      line-height: 1.1rem;
      text-transform: uppercase;
      margin-right: 0.8rem;
    }

    & > span {
      color: ${V.darkGrey};
    }
  }
`;

// Interests Seciton
// interests section
export const SkeletonIcon = css`
  width: 2rem;
  height: 2rem;
  color: ${V.lightGrey};
  /* fill: transparent; */
`;

export const IconTravel = styled(Airplane)`
  ${SkeletonIcon}
`;
export const IconVideo = styled(FileVideo)`
  ${SkeletonIcon}
`;
export const IconMusic = styled(Music)`
  ${SkeletonIcon}
`;
export const IconCycling = styled(Bicycle)`
  ${SkeletonIcon}
`;
export const IconCoocking = styled(LocationFood)`
  ${SkeletonIcon}
`;
export const IconSports = styled(SportsClub)`
  ${SkeletonIcon}
`;

export const WrapperInterests = styled.div`
  /* width: 60%; */
  width: 100%;
  height: auto;
  padding: 2rem;
  color: ${V.lightGrey};
  background-color: #222;

  & > h3 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }

  & > div.wrapper-icons {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    /* flex-wrap: wrap; */
    /* border: 2px solid blue; */
    /* padding-left: 1.5rem; */
    justify-content: center;

    & > div.icon-item {
      width: auto;
      height: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      /* border: 2px solid blue; */
      padding: 1.5rem;
      & > span {
        margin-top: 0.7rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

// Experience section
export const WrapperExperiences = styled.div`
  /* width: 50%; */
  width: 100%;
  height: auto;
  /* border: 2px solid goldenrod; */
  color: ${V.lightGrey};
  background-color: ${V.lightGrey};

  & > h3 {
    width: 100%;
    height: auto;
    text-transform: uppercase;
    /* font-weight: bold; */
    line-height: 2rem;
    letter-spacing: 0.3rem;
    padding: 0.4rem 1.2rem;
    background-color: ${(props) => changeTheme(props.activeTheme)};
    margin-bottom: 1.5rem;
  }

  & > div.wrapper-projects {
    width: 100%;
    height: auto;
    padding: 1rem;

    & > div.project-item {
      width: 100%;
      height: auto;
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 1rem;
      /* margin: 1.2rem 1rem; */
      /* padding: .5rem 0; */

      & > div {
        color: ${V.lightGrey};
        background-color: ${(props) => changeTheme(props.activeTheme)};
        width: 6rem;
        height: auto;
        padding: 0.2rem 0.6rem;
        border-radius: 0.8rem;
        text-align: center;
        /* font-weight: bold; */
        margin-bottom: 0.7rem;
      }

      & > h4 {
        color: ${V.darkGrey};
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-weight: bold;
      }
      & > p {
        color: ${V.darkGrey};
      }
    }
  }
`;

export const ProjectItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
  /* margin: 1.2rem 1rem; */
  /* padding: .5rem 0; */

  & > div {
    color: ${V.lightGrey};
    background-color: ${(props) => changeTheme(props.activeTheme)};
    width: 6rem;
    height: auto;
    padding: 0.2rem 0.6rem;
    border-radius: 0.8rem;
    text-align: center;
    /* font-weight: bold; */
    margin-bottom: 0.7rem;
  }

  & > h4 {
    color: ${V.lightGrey};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  & > p {
    color: ${V.lightGrey};
  }
`;

//Location
export const SkeletonLocationIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export const IconPhone = styled(PhoneSquareAlt)`
  ${SkeletonLocationIcon}
`;
export const IconEmail = styled(EmailOutline)`
  ${SkeletonLocationIcon}
`;
export const IconLocationPin = styled(LocationPin)`
  ${SkeletonLocationIcon}
`;

export const WrapperLocation = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* align-items: center; */
  padding-top: auto;
  padding: 0 1rem;
  background-color: #222;
  color: ${V.lightGrey};

  & > div.box {
    width: 100%;
    height: auto;
    /* border: 2px solid blueviolet; */
    margin-top: 3rem;
    display: flex;
    & > figure {
      width: 50%;
      height: 80%;
      background-color: ${(props) => changeTheme(props.activeTheme)};

      & > img {
        width: 100%;
        height: 100%;
        padding: 1rem;
      }
    }

    & > div.wrapper-info {
      width: 100%;
      height: auto;
      display: flex;
      flex-flow: column nowrap;

      & > div.box-item {
        width: 100%;
        height: auto;
        padding: 0.2rem 0;
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        display: flex;
        align-items: center;

        & > svg {
          margin-right: 0.5rem;
          color: ${(props) => changeTheme(props.activeTheme)};
        }
      }
    }
  }
`;
