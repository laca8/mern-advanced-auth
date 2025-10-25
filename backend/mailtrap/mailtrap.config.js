import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	auth: {
		user: process.env.EMAIL_HOST_USER,
		pass: process.env.EMAIL_HOST_PASSWORD,
	},
});

export const sender = {
	name: "Authentication App",
	email: "mailtrap@demomailtrap.com",
};
