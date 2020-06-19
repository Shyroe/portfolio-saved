import styled from "styled-components";
import V from "../../styles/variables";

export const WrapperProfile = styled.section`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  display: flex;
  background-color: ${V.primary};
  color: ${V.lightGrey};
`;

export const ProfilePicture = styled.figure`
  width: 8rem;
  height: 9rem;
  & > img {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    display: block;
  }
`;

export const ProfessionalInfo = styled.div`
  width: 45%;
  height: auto;
  margin-left: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  & > h2,
  & > h4 {
    text-transform: uppercase;
    font-weight: bold;
  }

  & > h4 {
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  & > p {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export const PersonalInfo = styled.div`
  width: 40%;
  height: auto;
  margin-left: 1rem;
  display: flex;
  flex-flow: column nowrap;

  & > span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
  }
`;
