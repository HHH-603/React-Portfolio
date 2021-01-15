import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import './style.css'
function App() {
    return (
        <>

            <Router>
                <Navbar />
                <div className="section-container">
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </div>
                <Footer />
            </Router>

        </>
    )
}

export default App;