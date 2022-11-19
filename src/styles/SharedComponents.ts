import styled from "styled-components";
import { flexCenter } from "@styles/SharedStyles";

export const Container = styled.section`
  text-align: center;
  height: fit-content;
  max-height: max-content;
  padding: 4rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: left;
    padding: 2.5rem 0;
  }
`;

export const Card = styled.div`
  ${flexCenter}
  position: relative;
  border-radius: 0.375rem /* 6px */;
  background-color: rgb(var(--secondary) / 1);
  color: rgb(var(--blue) / 0.5);
  transition-duration: 300ms;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    border-radius: 0.5rem 0;
    transform: translateY(-0.5rem);
    background-color: rgb(var(--secondaryBackground));
  }
`;

export const Heading = styled.h1`
  position: relative;
  margin: 0.5rem 0 1.5rem;
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  font-weight: 400;

  &:after {
    position: absolute;
    content: "";
    left: 0px;
    right: 0px;
    bottom: -0.75rem /* -12px */;
    background-color: rgb(var(--teal));
    height: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 2.25rem /* 48px */;
    line-height: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    &:after {
      width: 8rem /* 128px */;
    }
  }
`;

export const SubHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const Description = styled.h3`
  font-weight: 500;
  text-align: center;
  margin: 1.5rem 0 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: left;
    font-size: 1.25rem;
  }
`;

export const Text = styled.p`
  color: rgb(var(--blue) / 0.5);
  font-family: "Inter";
  letter-spacing: 1px;
  line-height: 1.75rem;
  font-weight: 300;
  font-size: 0.85rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
`;
