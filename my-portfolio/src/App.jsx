import React, { useRef } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import SelectedWorks from "./Components/SelectedWorksComponents/SelectedWorks";
import Service from "./Components/ServicesComponent/Service";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/HaveMind/Footer";
import ContactForm from "./Components/LetsTalk/ContactForm";
import { ScrollProvider } from "../src/Helpers/ScrollContext";

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
