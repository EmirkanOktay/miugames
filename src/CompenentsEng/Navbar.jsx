import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../Images/MIUGames_5.jpg";
import trFlag from "../Images/tr.png";
import engFlag from "../Images/eng.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export const navbarElements = [
    { name: "Games", path: "games" },
    { name: "Contact", path: "contact" },
    { name: "About", path: "about" },
];

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isEnglish, setIsEnglish] = useState(() => {
        return localStorage.getItem("isEnglish") === "true  " ? false : true;
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLanguageChange = (lang) => {
        setIsEnglish(lang);
        localStorage.setItem("isEnglish", lang.toString());
        setIsDropdownOpen(false);
        navigate(lang ? "/" : "/tr");
    };

    return (
        <header className="relative w-full text-white text-sm bg-[RGB(58,15,120)] shadow-md">
            <nav className="max-w-[1200px] w-full mx-auto px-0 flex items-center justify-between py-3">
                <a href="/" aria-label="Brand">
                    <img src={logo} alt="MIUGames" className="h-19 w-auto transition-transform duration-300 hover:scale-105" />
                </a>
                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-6">
                        {navbarElements.map((element, index) => (
                            <Link
                                key={index}
                                to={element.path}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-xl text-[rgb(245,230,200)] hover:text-[rgb(190,170,250)] transition-colors duration-300"
                            >
                                {element.name}
                            </Link>
                        ))}
                    </div>
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center">
                            <img
                                src={isEnglish ? engFlag : trFlag}
                                alt="Language Flag"
                                className="w-9 h-7 cursor-pointer transition-transform duration-300 hover:scale-110"
                            />
                        </button>
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[rgb(58,15,120)] text-[rgb(245,230,200)] shadow-lg rounded-lg mt-2 p-4 w-48 flex flex-col z-50"
                                >
                                    <button
                                        onClick={() => handleLanguageChange(true)}
                                        className="flex items-center gap-4 p-3 text-lg hover:bg-[rgba(245,230,200,0.2)] rounded transition-colors duration-300 cursor-pointer"
                                    >
                                        <img src={engFlag} alt="English" className="w-6 h-5" /> English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange(false)}
                                        className="flex items-center gap-4 p-3 text-lg hover:bg-[rgba(245,230,200,0.2)] rounded transition-colors duration-300 cursor-pointer"
                                    >
                                        <img src={trFlag} alt="Türkçe" className="w-6 h-5" /> Türkçe
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="rounded-lg bg-[rgba(245,230,200,0.2)] hover:bg-[rgba(245,230,200,0.4)] p-2 transition-all shadow-md"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <CloseIcon sx={{ fontSize: 30 }} /> : <ReorderIcon sx={{ fontSize: 30 }} />}
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-full bg-[rgb(58,15,120)] shadow-lg z-50 sm:hidden p-5 flex flex-col items-center justify-center"
                    >
                        <button onClick={() => setIsOpen(false)} className="text-white text-2xl mb-5">
                            <CloseIcon sx={{ fontSize: 30 }} />
                        </button>
                        <div className="flex flex-col gap-6 items-center">
                            {navbarElements.map((element, index) => (
                                <Link
                                    key={index}
                                    to={element.path}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer text-xl text-[rgb(245,230,200)] hover:text-[rgb(190,170,250)] transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {element.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;