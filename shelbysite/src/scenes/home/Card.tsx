import { motion } from "framer-motion";

const childVariant = {
	hidden: {opacity: 0, scale: 0.9},
	visible: {opacity: 1, scale: 1},
};

type Props = {
  title: string;
  description: string;
};

const Card = ({ title, description}: Props) => {
	return (
		<motion.div 
			className="h-80 w-80 mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
			variants={childVariant}
		>
			<h4 className="font-bold">{title}</h4>
			<p className="my-3">{description}</p>
		</motion.div>
	);
};

export default Card;