import "./Contact.css";

import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
import Map from "../../components/Contact/Map/Map";
import FAQ from "../../components/Contact/FAQ/FAQ";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo/>
      <ContactForm/>
      <Map/>
      <FAQ/>

    </>
  );
}

export default Contact;