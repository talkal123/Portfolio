import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import SelectedWorks from "./components/SelectedWorksComponents/SelectedWorks";
import Service from "./components/ServicesComponent/Service";
import Experience from "./components/Experience/Experience";
import Footer from "./components/HaveMind/Footer";
import ContactForm from "./components/LetsTalk/ContactForm";
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
