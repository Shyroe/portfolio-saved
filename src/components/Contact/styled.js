import styled from "styled-components";
import V from "../../styles/variables";

export const WrapperMap = styled.div`
  width: 100%;
  height: auto;
  /* border: 2px solid blue; */
`;

export const WrapperRow = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid orangered; */
  padding: 2rem;
  display: flex;
  color: ${V.darkGrey};
  background-color: ${V.lightGrey};
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* width: auto; */
  width: 50%;
  height: auto;

  & > .contact-info {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
    border-left: 2px solid ${V.primary};
    justify-content: space-evenly;
    padding-right: 2rem;
    /* border: 2px solid blue; */

    & > p {
      font-size: 1rem;
      margin-bottom: 0.2rem;
      display: flex;
    }
  }
`;

export const HeaderContact = styled.h3`
  color: #222;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.4rem;
  /* border-width: 50%; */
  /* border-bottom: 1px solid ${V.primary}; */
  padding-bottom: 0.5rem;
  position: relative;
  margin-bottom: 1rem;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background-color: ${V.primary};
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  & > .contact-form {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    /* padding: 0.5rem 1rem;     */
    justify-content: space-evenly;

    & > div {
      & > .btn-contact {
        border: none;
        width: auto;
        height: auto;
        padding: 0.6rem 0.4rem;
        text-align: center;
        color: ${V.lightGrey};
        background-color: ${V.primary};
        cursor: pointer;
        &:hover {
          background-color: ${V.lightGrey};
          color: ${V.primary};
        }
      }
    }

    & > .form-group {
      width: 100%;
      height: auto;
      padding: 0.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* border: 2px solid blue; */

      & > label {
        text-transform: capitalize;
        margin-bottom: 0.2rem;
      }

      & > input {
        border: none;
        width: 100%;
        height: 2rem;

        &:focus {
          outline: none;
          border: 2px solid ${V.primary};
        }
        /* box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); */
      }
    }
  }
`;
