import HText from "@/shared/HText";

const Footer = () => {
	return (
		<footer className="py-16 mt-20">
			<div className="justify-content mx-auto w-5/6 gap-16">
				<HText>Corporate info</HText>
				<div className="md:flex">
					<div>
						<div className="mt-5">
							<h4 className="font-bold">Address</h4>
							<p className="my-1">2461 East 16th St Brooklyn NY</p>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Phone</h4>
							<p className="my-1">(347) 633-4662</p>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Email</h4>
							<p className="my-1">estimating@shelbyelectrical.com</p>
						</div>
						<p className="md:my-16">@{new Date().getFullYear()} by Shelby Electrical.</p>
					</div>
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7698341210603!2d-73.95620425913651!3d40.59083564514275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24461881c16c5%3A0xcd6bad471c0d0714!2zMjQ2MSBFYXN0IDE2dGggU3RyZWV0LCBCcm9va2x5biwgTlkgMTEyMzUsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1703429441136!5m2!1sru!2sru" 
						className="w-[400px] h-[300px] border-0 mx-16"
					/>
				</div>
			</div>
		</footer>
	)
};

export default Footer;