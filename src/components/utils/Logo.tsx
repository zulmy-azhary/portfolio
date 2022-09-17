import { motion } from "framer-motion";

type Props = {
  className?: string;
}

const transition = { duration: 1, yoyo: Infinity, ease: "easeInOut" };

const Logo = ({className}: Props) => {
	return (
		<motion.svg
			width="42"
			height="42"
			viewBox="0 0 42 42"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<motion.path
        className="cursor-pointer"
				d="M4.31347 11.366L21 1.73205L37.6865 11.366V30.634L21 40.2679L4.31347 30.634V11.366Z"
				stroke="#61F9D5"
        strokeWidth="3"
			/>
			<motion.path
        className="cursor-pointer"
				d="M25 25.1614H20.4118L24.9804 16H17V17.8386H21.6078L17.0196 27H25V25.1614Z"
				fill="#61F9D5"
			/>
		</motion.svg>
	);
};

export default Logo;