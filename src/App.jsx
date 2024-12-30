// import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from "./components/Features.jsx";
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />

            {/* <section className="z-0 min-h-screen bg-blue-500" /> */}

            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    )
}

export default App