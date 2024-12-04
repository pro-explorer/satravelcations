import Contact from "components/contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact SA Travelcations | Plan Your Dream Adventure",
  description:
    "Get in touch with SA Travelcations to plan your next travel adventure. Reach out for personalized travel solutions, inquiries, and expert assistance.",
  keywords:
    "Contact SA Travelcations, travel agency contact, travel inquiries, travel planning, personalized travel solutions, South Africa travel agency, adventure planning, customer support",
  authors: [],
  robots: "index, follow",
};


export default function ContactPage() {


  return (
    <div className="container mx-auto px-6 py-2 lg:py-6">
     <Contact/>
    </div>
  );
}
