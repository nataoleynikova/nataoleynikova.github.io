import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { CardType, SelectedPage } from "@/shared/types";
import Card from "./Card";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const cards: Array<CardType> = [
	{
		title: "Commercial",
    description: "Expert commercial electrical services tailored to your needs. From installations to repairs and upgrades, our skilled team delivers top-quality workmanship.",
	},
	{
		title: "Residential",
    description: "Looking for Premium residential electrical services for your home. From installations to repairs, our skilled team provides safe and reliable solutions.",
	},
	{
		title: "Industrial",
    description: "Our experienced team handles installations, maintenance, and repairs with precision and efficiency. Trust us for safe, reliable, and high-quality electrical services.",
	},
	{
		title: "Service Calls",
    description: "Round-the-clock emergency electrical services at your fingertips. Our team is available 24/7 for all your urgent electrical needs. From power outages to electrical failures, we respond promptly and deliver efficient solutions.",
	},
	{
		title: "Fire Alarm & ARCS",
    description: "Comprehensive fire alarm and ARCS installation services you can rely on. Our expert team specializes in designing and installing cutting-edge fire alarm systems and ARCS systems. Ensure the safety of your property with our reliable solutions.",
	},
	{
		title: "Low Voltage",
    description: "Our skilled team specializes in low voltage installations, including data and communication wiring, security systems, and energy-efficient lighting. Count on us for efficient, reliable, and customized low voltage services.",
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {staggerChildren: 0.8}
	},
};

const Home = ({setSelectedPage}: Props) => {
	return (
		<section
			id="home"
			className="gap-16 bg-white mt-80 md:h-full md:pb-6"
		>
			{/* main header */}
			<motion.div 
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
			>
				<div className="z-10 mt-32 md:basis-5/6">
					{/* heading */}
					<motion.div 
						className="md:-mt-20"
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						transition={{duration: 0.75}}
						variants={{
							hidden: {opacity: 0, x: -50},
							visible: {opacity: 1, x: 0}
						}}
					>
						<HText>
							Comprehensive Electrical Contracting Services for Your Every Need
						</HText>
					</motion.div>

					{/* cards */}
					<motion.div 
						className="grid grid-rows-2 grid-flow-col items-center justify-between gap-8 mt-5"
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						variants={container}
					>
						{cards.map((card: CardType) => (
							<Card 
								key={card.title}
								title={card.title}
								description={card.description}
							/>
						))}
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

export default Home