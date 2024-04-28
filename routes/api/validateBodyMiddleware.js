import {
	createContact,
	updateContact
} from "../schemas/contact.js";

const validateBodyMiddleware = (req, res, next) : any => {
if (req.method === "POST") {
	const { error } = createContact.validate(req.body);

	if (error) {
		return res.status(400).send({message: error.message});
	}
}

if (req.method === "PUT") {
	const isBodyEmpty = Object.keys(req.body).length ===0;
	
	 if (isBodyEmpty) {
		return res.status(400).send({message: "Body must have at least one field"});
	 }
	const {error} = updateContact.validate(req.body);

	if (error) {
		return res.status(400).send ({meesage: error.message });
	}
}

next();
};

export default validateBodyMiddleware;