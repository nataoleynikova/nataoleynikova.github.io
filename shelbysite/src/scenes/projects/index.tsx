import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types";
import Project from "./Project.tsx";
import { motion } from "framer-motion";
import image1 from "@/assets/BoerumStreet.png";
import image2 from "@/assets/Bay25thStreet.png";
import image3 from "@/assets/ManhattanAvenue.png";
import image4 from "@/assets/NarrowsRoadBrooklyn.png";
import image5 from "@/assets/99thStreetBrooklyn.png";
import image6 from "@/assets/West13thStreetManhattan.png";
import image7 from "@/assets/SaintEdwardsStreet.png";

const projects: Array<ProjectType> = [
	{
    name: "Boerum Street",
    description: "19-story residential building in Williamsburg. The 190-foot tall structure yields 100,650 square feet for residential use, with 162 dwelling units, averaging 838 square foot per unit. Below ground space comes with capacity for 85 vehicles and storage space. The first floor has two recreational spaces, a lobby and a package room.",
    image: image1,
  },
  {
    name: "Bay 25th Street",
		description: "2 Story, basement and cellar 3 family semi-detached residence.",
    image: image2,
  },
  {
    name: "Manhattan avenue",
    description: "Located in Greenpoint, Brooklyn, between Freeman Street and Green Street, the 75-foot-tall development yields 28,436 square feet, with 24,666 square feet designated for residential space and 3,770 square feet for commercial space. The building has 30 residences with nine affordable housing units. Units are rentals based on the average unit scope of 822 square feet. The concrete-based structure has a cellar and a 22-foot-long rear yard.",
    image: image3,
  },
  {
    name: "Narrows Road Brooklyn",
    description: "Renovation of existing detached one family residence.",
    image: image4,
  },
  {
    name: "99th Street Brooklyn",
		description: "New 4-story & Cellar, 2-family residential building located in Brooklyn.",
    image: image5,
  },
  {
    name: "West 13th Street Manhattan",
    description: "Seven Story High Rise residential structure. The seventy foot structure yields close to 75,200 square feet dedicated to residential use.",
    image: image6,
  },
	{
    name: "Saint Edwards Street",
    description: "19-story residential building in Williamsburg. The 190-foot tall structure yields 100,650 square feet for residential use, with 162 dwelling units, averaging 838 square foot per unit. Below ground space comes with capacity for 85 vehicles and storage space. The first floor has two recreational spaces, a lobby and a package room.",
    image: image7,
  },
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
	return (
		<section 
			id="projects"
			className="w-full py-40"
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
			>
				<motion.div 
					className="mx-auto w-5/6"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div>
						<HText>Expertly Executed Projects, One Name you can trust.</HText>
					</div>
				</motion.div>
				<div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
					<ul className="w-[2800px] whitespace-nowrap">
						{projects.map((item: ProjectType, index) => (
							<Project 
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;