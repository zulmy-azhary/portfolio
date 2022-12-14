import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "@context";
import { socialMedia } from "@data";
import type { SocialMedia } from "@types";
import { flexCenter } from "@styles/SharedStyles";
import { defaultTransition, fadeIn } from "@styles/motionVariants";

const Wrapper = styled.div`
  ${flexCenter}
  max-width: 100%;
  position: relative;
  flex-direction: column;
  row-gap: 1.75rem;
  padding: 6rem 2.5rem;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 1px solid var(--skyMuted);
    transition-duration: 300ms;
    z-index: -1;
  }

  &:before {
    inset: 1.25rem -1.25rem;
  }

  &:after {
    inset: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const Image = styled.img`
  filter: grayscale(100%);
  width: 10rem;
  height: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  pointer-events: none;
  user-select: none;
  transition-duration: 300ms;
  outline: 0 solid var(--teal);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 15rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    max-width: 18rem;
  }
`;

const ProfileSubText = styled.p`
  font-family: var(--comicNeue);
  font-weight: 500;
  color: var(--skyMuted);
  transition-duration: 300ms;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    font-size: 1rem;
  }
`;

const ProfileMainText = styled(ProfileSubText)`
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    font-size: 1.25rem;
  }
`;

const SocialMediaIcon = styled(motion.a)`
  line-height: 0;
  font-size: 1.5rem;
  color: var(--skyMuted);
  border: 1px solid var(--skyMuted);
  padding: 0.3rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border-radius: 0.5rem 0;
    transform: scale(1.2);

    * {
      cursor: pointer;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    font-size: 1.75rem;
  }
`;

const Container = styled(motion.section)<{ $scroll: boolean }>`
  ${flexCenter}
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  width: max-content;
  border: 0 solid var(--skyMuted);
  padding: 7rem 0;

  &:hover {
    ${Wrapper} {
      &:before,
      &:after {
        border-color: var(--teal);
      }
    }

    ${Image} {
      filter: grayscale(0);
      outline-width: 1px;
      outline-offset: 5px;
    }

    ${ProfileSubText} {
      color: var(--teal);
    }

    ${ProfileMainText} {
      color: var(--sky);
    }

    ${SocialMediaIcon} {
      border-color: var(--teal);
      color: var(--teal);
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 9rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    border-left-width: 1px;
    border-color: var(--skyMuted);
    position: fixed;
    padding: 0 3rem;
    width: 30%;

    &:hover {
      border-color: var(--teal);
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding: 0 4%;
    transition-duration: 500ms;
    width: ${(props) => (props.$scroll ? "25%" : "35%")};
  }
`;

const SocialMediaWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;
  padding: 0 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 0;
    margin-top: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding: 0 0.25rem;
    justify-content: space-evenly;
  }
`;

const ProfileDescWrapper = styled.div`
  text-align: center;
  margin-top: 0.75rem;
`;

const Profile: React.FC = () => {
  const { scroll } = useScroll();

  return (
    <Container
      $scroll={scroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...defaultTransition, delay: 0.9 }}
    >
      <Wrapper
        as={motion.div}
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ ...defaultTransition, delay: 1.1 }}
      >
        <Image src={"/assets/profile-pic.jpg"} alt="Profile" />
        <ProfileDescWrapper>
          <ProfileSubText>Hi there! I'am</ProfileSubText>
          <ProfileMainText as={motion.h2}>Zulmy Azhary</ProfileMainText>
        </ProfileDescWrapper>
      </Wrapper>
      <SocialMediaWrapper
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.125, delayChildren: 1.3 }}
      >
        {socialMedia.map(({ label, url, Icon }: SocialMedia) => (
          <SocialMediaIcon
            variants={fadeIn}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2, transition: { duration: 0 } }}
            key={label}
            href={url}
            title={label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </SocialMediaIcon>
        ))}
      </SocialMediaWrapper>
    </Container>
  );
};

export default Profile;
