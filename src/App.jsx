import React, { useRef } from "react";
import "./App.css";
import Hero from "./tmp_components/Hero/Hero";
import SelectedWorks from "./tmp_components/SelectedWorksComponents/SelectedWorks";
import Service from "./tmp_components/ServicesComponent/Service";
import Experience from "./tmp_components/Experience/Experience";
import Footer from "./tmp_components/HaveMind/Footer";
import ContactForm from "./tmp_components/LetsTalk/ContactForm";
import { ScrollProvider } from "./helpers/ScrollContext";

function App() {
  return (
    <div className="flex flex-col justify-center items-center animated-bg min-h-screen">
      <div className="flex flex-col w-full">
        <ScrollProvider>
            <Hero />
          <div
            style={{ backgroundColor: "#eeeff0" }}
            className="flex flex-col gap-20"
          >
            <div id="Work">
              <SelectedWorks />
            </div>
            <div id="Service">
              <Service />
            </div>
          </div>
          <div id="Experience">
            <Experience />
          </div>
          <div id="Contact">
            <ContactForm />
          </div>
          <Footer />
        </ScrollProvider>
      </div>
    </div>
  );
}

export default App;
