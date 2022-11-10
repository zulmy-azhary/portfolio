import React, { useState } from "react";
import styled from "styled-components";
import { TechIcon, TechTabList } from "components/main";
import { Container, Description, Heading, SubHeading } from "styles/SharedComponents";
import type { TabList } from "types";
import { AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const TechStack: React.FC = () => {
  const [tabSelected, setTabSelected] = useState<TabList>("View All");

  return (
    <Container id="technologies">
      <SubHeading>Tools & Tech</SubHeading>
      <Heading>Tech Stack</Heading>
      <Description>
        Here are a few tools and technologies that i've been used to build websites.
      </Description>
      <Wrapper>
        <TechTabList tabSelected={tabSelected} setTabSelected={setTabSelected} />
        <AnimatePresence mode="wait" initial={false}>
          <TechIcon key={tabSelected} tabSelected={tabSelected} />
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default TechStack;
