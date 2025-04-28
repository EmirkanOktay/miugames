import React from "react";
import { useLocation } from "react-router-dom";
import { gamesData } from "../game/GamesArray";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

function GameDetails() {
    const location = useLocation();
    const currentPath = location.pathname.replace("/gametr", "/game");
    const game = gamesData.find((g) => g.routeToPage === currentPath || g.routeToPageTr === location.pathname);

    if (!game) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "rgb(50,20,100)" }}>
                <h1 className="text-3xl font-bold text-center text-yellow-300">Game not found</h1>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: "rgb(50,20,100)" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-6"
                    style={{ color: "rgb(245,215,150)" }}
                >
                    {game.name}
                </motion.h1>

                <motion.img
                    src={game.image}
                    alt={game.name}
                    className="w-full max-w-3xl rounded-2xl shadow-lg mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-center max-w-2xl mb-8"
                    style={{ color: "rgb(245,215,150)" }}
                >
                    {game.description}
                </motion.p>

                <motion.a
                    href={game.playLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full font-semibold text-lg"
                    style={{
                        backgroundColor: "rgb(245,215,150)",
                        color: "rgb(50,20,100)",
                        transition: "0.3s",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                    }}
                >
                    Play on Google Play
                </motion.a>
            </div>
            <Footer />
        </div>
    );
}

export default GameDetails;
