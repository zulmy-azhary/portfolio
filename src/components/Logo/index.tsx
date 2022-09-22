import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.svg)`
	width: 42px;
	height: 42px;
	fill: none;

	&:hover {
		fill: rgba(255, 255, 255, 0.05);
	}
	
	&:hover > * {
		cursor: pointer;
	}
`;

const Border = styled(motion.path)`
	stroke: rgb(var(--teal));
	stroke-width: 3px;
`;

const Letter = styled(motion.path)`
	fill: rgb(var(--teal));
`;

const Logo = (): JSX.Element => {
	return (
		<Container
			viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
		>
			<Border
				d="M4.31347 11.366L21 1.73205L37.6865 11.366V30.634L21 40.2679L4.31347 30.634V11.366Z"
			/>
			<Letter
				d="M25 25.1614H20.4118L24.9804 16H17V17.8386H21.6078L17.0196 27H25V25.1614Z"
			/>
		</Container>
	);
};

export default Logo;