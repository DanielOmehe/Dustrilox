import { FaPenAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Button from "../../components/shared/button";

const ContactForm = () => {
	return (
		<form className="contact-form">
			<div className="contact-input-flex">
				<div className="contact-input-group">
					<RxAvatar size={20} />
					<input type="text" placeholder="Enter your name here" />
				</div>
				<div className="contact-input-group">
					<RxAvatar size={20} />
					<input type="text" placeholder="Enter your name here" />
				</div>
			</div>
			<div className="contact-textarea">
				<FaPenAlt size={20} />
				<textarea placeholder="Enter message here" cols={"100"}></textarea>
			</div>
			<Button classname={"submit-request"}>Submit Request</Button>
		</form>
	);
};

export default ContactForm;