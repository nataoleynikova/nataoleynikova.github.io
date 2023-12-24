import HText from "@/shared/HText";
import {SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AboutUsImage from "@/assets/AboutUs.png";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({setSelectedPage}: Props) => {
	return (
		<section
			id="AboutUs"
			className="mx-auto min-h-full w-5/6 py-20"
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
			>
				{/* graphics & description */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* image */}
					<img className="mx-auto" src={AboutUsImage} alt="about-us" />

					{/* description */}
					<div>
						{/* title */}
						<motion.div 
							initial="hidden"
							whileInView="visible"
							viewport={{once: true, amount: 0.5}}
							transition={{duration: 0.75}}
							variants={{
								hidden: {opacity: 0, x: 50},
								visible: {opacity: 1, x: 0}
							}}
						>
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<div>
									<HText>About us</HText>
								</div>
							</div>
						</motion.div>

						{/* description */}
						<motion.div 
							initial="hidden"
							whileInView="visible"
							viewport={{once: true, amount: 0.5}}
							transition={{delay: 0.2, duration: 0.75}}
							variants={{
								hidden: {opacity: 0, x: 50},
								visible: {opacity: 1, x: 0}
							}}
						>
							<p className="my-5">
								We deliver full-service solutions backed by the expertise of our office personnel and experienced electricians on all five boroughs.  You'll find us in major healthcare facilities, complex data centers, out in the solar field, and on job sites of every scope and size.
							</p>
							<p className="mb-5">
								Strong relationships are the backbone of our business. We prioritize clear communication and shared success.  That's why over 85% of our projects are with repeat customers - our clients trust Shelby Electrical Corp to deliver cost-effective, people-first, cutting-edge solutions every time.
							</p>
						</motion.div>
					</div>
				</div>

				{/* header */}
				<motion.div 
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<HText>Our Work</HText>
					<p className="my-5">
						Our high standard of building has helped us be a part of exceptional projects across the five boroughs. We utilize the latest industry technologies to provide electrical construction of new facilities and spaces in need of remodeling.
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default AboutUs;