import React from 'react'
import { useState, createContext } from 'react';


const LanguageContext = () => {
  const [language,setLanguage] = useState("en")

  const changeLanguage = () => {
    if (language === "en") {
      setLanguage("heb")
      
    } else {
      setLanguage("en")
    }
  }

  const translations = {
  en: {
    Works: "Work",
    contact: "Contact",
    services: "Services",
    Experience: "Experience",
    available:"Available",
    available:"Available",
    available:"Available",
    available:"Available",
    available:"Available",
    available:"Available",
    available:"Available",
    available:"Available",
    crafting:"Crafting seamless web experiences from database to UI. Specializing in building scalable, user-centric applications.",
    linkedin:"linkedin",
    github:"GitHub",
    instagram:"Instagram",
    selected:"Selected",
    business:"Business",
    app:"App",
    all:"All",
    commercial:"Commercial",
    exploration:"Exploration",
    appointments:"appointments",
    for:"for",
    comprehensive:"A comprehensive booking system that allows clients to schedule services online while providing business owners with an intuitive dashboard for managing appointments and staff availability.",
    

  },
  heb: {
    Works:"עבודות",
    greeting: "שלום",
    contact: "צור קשר",
    services: "שירותים",
    Experience: "מומחיות",
    available:"זמין",
    for:"Available",
    new:"Available",
    project:"Available",
    Lets:"Let's",
    Talk:"Available",
    available:"Available",
  }
}

  return (
    <div>LanguageContext</div>
  )
}

export default LanguageContext