"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, Phone, MapPin, Languages, Globe, MessageCircle, Star, Award, Zap } from "lucide-react"

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      education: "Parcours",
      experience: "Expériences",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      title: "Youssef El Amrani",
      subtitle: "Étudiant en Électronique Embarquée",
      description:
        "Passionné par les systèmes embarqués et l'innovation technologique, je recherche un Ausbildung en Allemagne pour développer mes compétences et contribuer à l'industrie 4.0.",
      age: "22 ans",
      location: "Casablanca, Maroc",
      downloadCV: "Télécharger mon CV",
    },
    about: {
      title: "À propos de moi",
      content:
        "Diplômé d'un DUT en Génie Électrique et Informatique Industrielle, je suis spécialisé dans les systèmes embarqués et l'électronique de puissance. Mon objectif est de poursuivre ma formation en Allemagne à travers un Ausbildung pour acquérir une expertise pratique et théorique de haut niveau.",
    },
    education: {
      title: "Formation & Diplômes",
      items: [
        {
          title: "DUT Génie Électrique et Informatique Industrielle",
          institution: "Université Hassan II, Casablanca",
          period: "2021 - 2023",
          description: "Spécialisation en systèmes embarqués, automatisme et électronique de puissance",
        },
        {
          title: "Baccalauréat Sciences Mathématiques",
          institution: "Lycée Mohammed V, Casablanca",
          period: "2021",
          description: "Option Sciences de l'Ingénieur - Mention Bien",
        },
        {
          title: "Certificat Goethe B1",
          institution: "Institut Goethe, Casablanca",
          period: "2023",
          description: "Certification officielle de niveau B1 en allemand",
        },
      ],
    },
    experience: {
      title: "Expériences Professionnelles",
      items: [
        {
          title: "Stage Technique",
          company: "Schneider Electric Maroc",
          period: "Été 2023",
          description:
            "Développement d'un système de monitoring pour équipements industriels utilisant Arduino et capteurs IoT",
        },
        {
          title: "Projet Étudiant",
          company: "Université Hassan II",
          period: "2022 - 2023",
          description: "Conception d'un robot autonome de navigation avec Raspberry Pi et vision par ordinateur",
        },
        {
          title: "Bénévolat Technique",
          company: "Association des Jeunes Ingénieurs",
          period: "2022",
          description: "Formation d'étudiants en électronique de base et programmation Arduino",
        },
      ],
    },
    skills: {
      title: "Compétences",
      languages: {
        title: "Langues",
        items: ["Français (Natif)", "Arabe (Natif)", "Allemand (B1)", "Anglais (B2)"],
      },
      technical: {
        title: "Compétences Techniques",
        items: [
          "Systèmes Embarqués",
          "Arduino/Raspberry Pi",
          "C/C++",
          "Python",
          "VHDL",
          "PCB Design",
          "Automatisme",
          "IoT",
        ],
      },
      soft: {
        title: "Compétences Transversales",
        items: ["Travail d'équipe", "Résolution de problèmes", "Gestion de projet", "Communication interculturelle"],
      },
    },
    contact: {
      title: "Contact",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
      },
      info: {
        email: "youssef.elamrani@email.com",
        phone: "+212 6 12 34 56 78",
        location: "Casablanca, Maroc",
      },
    },
  },
  de: {
    nav: {
      home: "Über mich",
      education: "Ausbildung",
      experience: "Berufserfahrung",
      skills: "Fähigkeiten",
      contact: "Kontakt",
    },
    hero: {
      title: "Youssef El Amrani",
      subtitle: "Student der Embedded Electronics",
      description:
        "Leidenschaftlich für eingebettete Systeme und technologische Innovation, suche ich eine Ausbildung in Deutschland, um meine Fähigkeiten zu entwickeln und zur Industrie 4.0 beizutragen.",
      age: "22 Jahre",
      location: "Casablanca, Marokko",
      downloadCV: "Lebenslauf herunterladen",
    },
    about: {
      title: "Über mich",
      content:
        "Als Absolvent eines DUT in Elektrotechnik und Industrieinformatik bin ich auf eingebettete Systeme und Leistungselektronik spezialisiert. Mein Ziel ist es, meine Ausbildung in Deutschland durch eine Ausbildung fortzusetzen, um praktische und theoretische Expertise auf höchstem Niveau zu erwerben.",
    },
    education: {
      title: "Ausbildung & Diplome",
      items: [
        {
          title: "DUT Elektrotechnik und Industrieinformatik",
          institution: "Universität Hassan II, Casablanca",
          period: "2021 - 2023",
          description: "Spezialisierung auf eingebettete Systeme, Automatisierung und Leistungselektronik",
        },
        {
          title: "Abitur Mathematische Wissenschaften",
          institution: "Lycée Mohammed V, Casablanca",
          period: "2021",
          description: "Option Ingenieurswissenschaften - Gut bestanden",
        },
        {
          title: "Goethe B1 Zertifikat",
          institution: "Goethe Institut, Casablanca",
          period: "2023",
          description: "Offizielle B1-Zertifizierung in Deutsch",
        },
      ],
    },
    experience: {
      title: "Berufserfahrung",
      items: [
        {
          title: "Technisches Praktikum",
          company: "Schneider Electric Marokko",
          period: "Sommer 2023",
          description: "Entwicklung eines Überwachungssystems für Industrieanlagen mit Arduino und IoT-Sensoren",
        },
        {
          title: "Studentenprojekt",
          company: "Universität Hassan II",
          period: "2022 - 2023",
          description: "Entwurf eines autonomen Navigationsroboters mit Raspberry Pi und Computer Vision",
        },
        {
          title: "Technische Freiwilligenarbeit",
          company: "Verein Junger Ingenieure",
          period: "2022",
          description: "Ausbildung von Studenten in Grundelektronik und Arduino-Programmierung",
        },
      ],
    },
    skills: {
      title: "Fähigkeiten",
      languages: {
        title: "Sprachen",
        items: ["Französisch (Muttersprache)", "Arabisch (Muttersprache)", "Deutsch (B1)", "Englisch (B2)"],
      },
      technical: {
        title: "Technische Fähigkeiten",
        items: [
          "Eingebettete Systeme",
          "Arduino/Raspberry Pi",
          "C/C++",
          "Python",
          "VHDL",
          "PCB Design",
          "Automatisierung",
          "IoT",
        ],
      },
      soft: {
        title: "Soft Skills",
        items: ["Teamarbeit", "Problemlösung", "Projektmanagement", "Interkulturelle Kommunikation"],
      },
    },
    contact: {
      title: "Kontakt",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Senden",
      },
      info: {
        email: "youssef.elamrani@email.com",
        phone: "+212 6 12 34 56 78",
        location: "Casablanca, Marokko",
      },
    },
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"fr" | "de">("fr")
  const [scrollY, setScrollY] = useState(0)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    // Simulate CV download
    const link = document.createElement("a")
    link.href = "/placeholder-cv.pdf"
    link.download = `CV_Youssef_El_Amrani_${language.toUpperCase()}.pdf`
    link.click()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-300 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-200 rounded-full animate-bounce-slow opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-gray-400 rounded-full animate-pulse-slow opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-drift opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200 animate-slide-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 animate-fade-in">
                <div className="w-8 h-6 bg-gradient-to-b from-black via-red-600 to-yellow-400 rounded-sm shadow-md animate-glow"></div>
                <h1 className="text-xl font-bold text-gray-900 animate-typing">Youssef El Amrani</h1>
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 font-medium relative group animate-fade-in-delayed"
                >
                  {t.nav.home}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#education"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 font-medium relative group animate-fade-in-delayed"
                  style={{ animationDelay: "0.1s" }}
                >
                  {t.nav.education}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 font-medium relative group animate-fade-in-delayed"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t.nav.experience}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 font-medium relative group animate-fade-in-delayed"
                  style={{ animationDelay: "0.3s" }}
                >
                  {t.nav.skills}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 font-medium relative group animate-fade-in-delayed"
                  style={{ animationDelay: "0.4s" }}
                >
                  {t.nav.contact}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant={language === "fr" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("fr")}
                className="text-xs hover:scale-110 transition-all duration-300 animate-bounce-in"
              >
                🇫🇷 FR
              </Button>
              <Button
                variant={language === "de" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("de")}
                className="text-xs hover:scale-110 transition-all duration-300 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 animate-bounce-in"
                style={{ animationDelay: "0.1s" }}
              >
                🇩🇪 DE
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white py-20 relative overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-50 rounded-full opacity-50 animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-30 animate-float-reverse"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-gray-200 rounded-full animate-spin-very-slow opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-blue-200 rotate-45 animate-pulse-gentle opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Star className="w-6 h-6 text-blue-600 animate-spin-slow" />
                <span className="text-gray-700 font-semibold animate-typing-delayed">Candidat Ausbildung</span>
                <div className="w-6 h-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded-sm animate-glow"></div>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                {t.hero.title}
              </h1>
              <div
                className="flex justify-center lg:justify-start mb-4 animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-glow-subtle">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-3 bg-gradient-to-b from-black via-red-600 to-yellow-400 rounded-sm shadow-sm"></div>
                    <span className="text-blue-700 font-semibold text-sm">
                      {language === "fr"
                        ? "Candidature pour Ausbildung en Allemagne"
                        : "Bewerbung für Ausbildung in Deutschland"}
                    </span>
                  </div>
                </div>
              </div>
              <h2
                className="text-xl lg:text-2xl text-gray-700 mb-6 animate-slide-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                {t.hero.subtitle}
              </h2>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Badge
                  variant="secondary"
                  className="text-sm hover:scale-110 transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200 animate-bounce-in hover:animate-wiggle"
                >
                  <MapPin className="w-4 h-4 mr-1 animate-pulse-gentle" />
                  {t.hero.location}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm hover:scale-110 transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200 animate-bounce-in hover:animate-wiggle"
                  style={{ animationDelay: "0.1s" }}
                >
                  {t.hero.age}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-sm hover:scale-110 transition-all duration-300 bg-blue-50 text-blue-700 hover:bg-blue-100 animate-bounce-in hover:animate-wiggle"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Award className="w-4 h-4 mr-1 animate-pulse-gentle" />
                  Goethe B1
                </Badge>
              </div>
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-in hover:animate-pulse-button"
                style={{ animationDelay: "0.7s" }}
              >
                <Download className="w-5 h-5 mr-2 animate-bounce-gentle" />
                {t.hero.downloadCV}
              </Button>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-blue-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse-slow"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20ao%C3%BBt%202025%2C%2017_27_02-WMr61qoT0OJcMHxifugueOM85s0dhj.png"
                  alt="Youssef El Amrani"
                  className="relative w-80 h-80 object-cover rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-500 border-4 border-white animate-float-gentle hover:animate-none"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 animate-slide-in-up group-hover:animate-bounce-gentle">
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">Disponible</span>
                    <Zap className="w-4 h-4 text-blue-600 animate-flash" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-400 to-transparent animate-slide-down-slow"></div>
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-slide-down-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              <Star className="w-10 h-10 inline-block mr-3 text-blue-600 animate-spin-slow" />
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:animate-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-typing-text">{t.about.content}</p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-bounce-in hover:animate-wiggle">
                    🎯 Objectif: Ausbildung
                  </Badge>
                  <Badge
                    className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 animate-bounce-in hover:animate-wiggle"
                    style={{ animationDelay: "0.1s" }}
                  >
                    🇩🇪 Deutschland
                  </Badge>
                  <Badge
                    className="bg-gray-700 text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 animate-bounce-in hover:animate-wiggle"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ⚡ Industrie 4.0
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-gray-200 to-blue-200 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-all duration-1000 animate-pulse-slow"></div>
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vanessa-loring-7868884.jpg-UduQ5CX2N147E9CtAjVJdcjm9uGgfa.jpeg"
                    alt="Électronique embarquée"
                    className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white transform group-hover:scale-110 transition-all duration-500 animate-float-gentle"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold animate-slide-in-up group-hover:animate-bounce-gentle">
                    Embedded Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              <Award className="w-10 h-10 inline-block mr-3 text-blue-600 animate-spin-slow" />
              {t.education.title}
            </h2>
            <div className="w-32 h-1 bg-gray-900 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.education.items.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 transform hover:scale-110 animate-slide-in-up hover:animate-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 animate-pulse-gentle group-hover:animate-spin-slow">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-semibold mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      {item.institution}
                    </p>
                    <Badge className="bg-gray-100 text-gray-700 mb-3 hover:bg-gray-200 transition-colors duration-300 animate-bounce-in hover:animate-wiggle">
                      {item.period}
                    </Badge>
                    <p className="text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              <Zap className="w-10 h-10 inline-block mr-3 text-blue-600 animate-flash" />
              {t.experience.title}
            </h2>
            <div className="w-32 h-1 bg-gray-900 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {t.experience.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-105 animate-slide-in-left shadow-sm hover:shadow-xl hover:animate-none"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 animate-pulse-gentle group-hover:animate-bounce-gentle">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-700 font-semibold mb-2 animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                      >
                        {item.company}
                      </p>
                      <Badge className="bg-gray-100 text-gray-700 mb-3 hover:bg-gray-200 transition-colors duration-300 animate-bounce-in hover:animate-wiggle">
                        {item.period}
                      </Badge>
                      <p className="text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-blue-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mikhail-nilov-9242839.jpg-axbZxMfkWpybALffTqUqUjVWi4bXue.jpeg"
                  alt="Laboratoire"
                  className="relative w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500 border border-gray-200 animate-fade-in hover:animate-none"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-gray-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mikhail-nilov-9242834.jpg-F8uqOVtwDGMOk7R2yaCF7iw1cL7EBA.jpeg"
                  alt="Travail d'équipe"
                  className="relative w-full rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500 border border-gray-200 animate-fade-in hover:animate-none"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              <Globe className="w-10 h-10 inline-block mr-3 text-blue-600 animate-spin-slow" />
              {t.skills.title}
            </h2>
            <div className="w-28 h-1 bg-gray-900 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-110 animate-slide-in-up shadow-sm hover:shadow-xl hover:animate-none">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-500 animate-pulse-gentle group-hover:animate-bounce-gentle">
                  <Languages className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                  {t.skills.languages.title}
                </h3>
              </div>
              <div className="space-y-3">
                {t.skills.languages.items.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-center font-semibold hover:scale-110 hover:bg-gray-200 transition-all duration-300 animate-slide-in-left hover:animate-wiggle"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-110 animate-slide-in-up delay-200 shadow-sm hover:shadow-xl hover:animate-none">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-all duration-500 animate-pulse-gentle group-hover:animate-spin-slow">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                  {t.skills.technical.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {t.skills.technical.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white text-gray-800 px-3 py-2 rounded-lg text-center text-sm font-semibold hover:scale-110 hover:shadow-sm transition-all duration-300 animate-fade-in border border-gray-200 hover:animate-wiggle"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-110 animate-slide-in-up delay-400 shadow-sm hover:shadow-xl hover:animate-none">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-500 animate-pulse-gentle group-hover:animate-bounce-gentle">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                  {t.skills.soft.title}
                </h3>
              </div>
              <div className="space-y-3">
                {t.skills.soft.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-center font-semibold hover:scale-110 hover:bg-gray-200 transition-all duration-300 animate-slide-in-right hover:animate-wiggle"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              <MessageCircle className="w-10 h-10 inline-block mr-3 text-blue-600 animate-bounce-gentle" />
              {t.contact.title}
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-4 text-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Bereit für eine Ausbildung in Deutschland 🇩🇪
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-xl transform hover:scale-105 hover:animate-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center animate-fade-in">
                  <Phone className="w-6 h-6 mr-3 text-blue-600 animate-pulse-gentle" />
                  Kontakt Informationen
                </h3>
                <div className="space-y-6">
                  <div
                    className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slide-in-up hover:animate-none"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 animate-pulse-gentle group-hover:animate-bounce-gentle">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-gray-900 font-semibold">{t.contact.info.email}</p>
                    </div>
                  </div>

                  <div
                    className="group flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 animate-slide-in-up hover:animate-none"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-all duration-300 animate-pulse-gentle group-hover:animate-bounce-gentle">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">WhatsApp</p>
                      <p className="text-gray-900 font-semibold">{t.contact.info.phone}</p>
                    </div>
                  </div>

                  <div
                    className="group flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 animate-slide-in-up hover:animate-none"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300 animate-pulse-gentle group-hover:animate-spin-slow">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Standort</p>
                      <p className="text-gray-900 font-semibold">{t.contact.info.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-xl transform hover:scale-105 hover:animate-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center animate-fade-in">
                  <Zap className="w-6 h-6 mr-3 text-blue-600 animate-flash" />
                  Nachricht senden
                </h3>
                <form className="space-y-6">
                  <div className="group animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                    <Input
                      placeholder={t.contact.form.name}
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
                    />
                  </div>
                  <div className="group animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
                    />
                  </div>
                  <div className="group animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                    <Textarea
                      placeholder={t.contact.form.message}
                      rows={4}
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-in hover:animate-pulse-button"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Zap className="w-5 h-5 mr-2 animate-flash" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 animate-typing-delayed">
              © 2024 Youssef El Amrani. {language === "fr" ? "Tous droits réservés." : "Alle Rechte vorbehalten."}
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes wiggle {
          0%, 7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(0px);
          }
          75% {
            transform: translateY(-10px) translateX(-5px);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(10px) translateX(-5px);
          }
          50% {
            transform: translateY(20px) translateX(0px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-button {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes flash {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes typing-delayed {
          0%, 50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(10px) translateY(-10px);
          }
          50% {
            transform: translateX(-5px) translateY(-20px);
          }
          75% {
            transform: translateX(-10px) translateY(-10px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        @keyframes slide-down-slow {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow-subtle {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
          }
        }

        /* Animation Classes */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-wiggle {
          animation: wiggle 0.8s ease-in-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-button {
          animation: pulse-button 2s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-flash {
          animation: flash 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-typing {
          animation: typing 2s steps(20, end);
        }

        .animate-typing-delayed {
          animation: typing-delayed 3s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
        }

        .animate-slide-down-slow {
          animation: slide-down-slow 4s ease-out infinite;
        }

        .animate-glow-subtle {
          animation: glow-subtle 3s ease-in-out infinite;
        }

        /* Delay Classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  )
}
