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
    Work: "Work",
    contact: "Contact",
    services: "Services",
    Experience: "Experience"
  },
  heb: {
    greeting: "שלום",
    contact: "צור קשר",
    services: "שירותים",
    Experience: "מומחיות"
  }
}

  return (
    <div>LanguageContext</div>
  )
}

export default LanguageContext