import { useForm } from "react-hook-form";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-orange-10 px-5 py-3 placeholder-white`;
	
	const {
		register,
		trigger,
		formState: {errors}
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	}

	return (
		<section 
			id="contactus"
			className="mx-auto w-5/6 pt-24"
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* header */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<HText>Contact us to learn more</HText>
					<p className="mt-5">
						Leave your message and we'll get back to you shortly.
					</p>
				</motion.div>

				{/*  form */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						transition={{duration: 0.75}}
						variants={{
							hidden: {opacity: 0, y: 50},
							visible: {opacity: 1, y: 0}
						}}
					>
						<form 
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/your@email.com"
							method="POST"
						>
							{errors.name && (
								<p className="mb-1 text-primary-500">
									{errors.name.type === "required" && "This field is required"}
									{errors.name.type === "maxLength" && "Max length is 100 char"}
								</p>
							)}
							<input 
								className={inputStyles}
								type="text"
								placeholder="NAME"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>
							
							{errors.email && (
								<p className="mb-1 text-primary-500">
									{errors.email.type === "required" && "This field is required"}
									{errors.email.type === "pattern" && "invalid email address"}
								</p>
							)}
							<input 
								className={inputStyles}
								type="text"
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							
							{errors.email && (
								<p className="mb-1 text-primary-500">
									{errors.email.type === "required" && "This field is required"}
								</p>
							)}
							<input 
								className={inputStyles}
								type="text"
								placeholder="PHONE"
								{...register("phone", {
									required: true,
								})}
							/>

							{errors.email && (
								<p className="mb-1 text-primary-500">
									{errors.email.type === "required" && "This field is required"}
								</p>
							)}
							<input 
								className={inputStyles}
								type="text"
								placeholder="ADDRESS"
								{...register("address", {
									required: true,
								})}
							/>
							
							{errors.message && (
								<p className="mb-1 text-primary-500">
									{errors.message.type === "required" && "This field is required"}
									{errors.message.type === "maxLength" && "Max length is 2000 char"}
								</p>
							)}
							<textarea 
								className={inputStyles}
								rows={4}
								cols={50}
								placeholder="MESSAGE"
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							
							<button
								type="submit"
								className="rounded-lg bg-red-10 px-20 py-3 transition duration-500 text-white"
							>
								SUBMIT
							</button>
						</form>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

export default ContactUs;