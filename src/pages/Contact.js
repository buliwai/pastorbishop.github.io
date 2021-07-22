import React from "react";
import Navigation from "../Components/Navigation";
import ButtonsBottom from "../Components/ButtonsBottom";
import ContactForm from "../Components/ContactForm";
import SocialNetwork from "../Components/SocialNetwork";
import Logo from "../Components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../Components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              
              <p>33290 Ludon Medoc</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0642844284" className="hover">
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 30 19 92 59
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  plomberiechauffageotten@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Eureka DigiWeb - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;