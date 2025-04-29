import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gamesData } from "../game/GamesArray";

function Games() {
    return (
        <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "rgb(50,20,100)" }}>
            <section id="games">
                <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "rgb(245,215,150)" }}>
                    Our Games
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {gamesData.map((game) => (
                        <div
                            key={game.id}
                            className="relative group overflow-hidden rounded-lg shadow-lg bg-black bg-opacity-30"
                        >
                            <img
                                src={game.image}
                                alt={game.name}
                                className="w-full h-60 object-cover"
                            />

                            <div className="p-4 sm:hidden">
                                <h3 className="text-lg font-semibold" style={{ color: "rgb(245,215,150)" }}>
                                    {game.name}
                                </h3>
                                <p className="text-sm" style={{ color: "rgb(245,215,150)" }}>
                                    {game.descriptionShort}
                                </p>
                                <Link
                                    to={game.routeToPage}
                                    className="block mt-3 px-4 py-2 rounded-lg text-center"
                                    style={{
                                        backgroundColor: "rgb(245,215,150)",
                                        color: "rgb(50,20,100)",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {game.button}
                                </Link>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black bg-opacity-80 hidden sm:flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <h3 className="text-xl font-semibold" style={{ color: "rgb(245,215,150)" }}>
                                    {game.name}
                                </h3>
                                <p className="text-sm mb-4" style={{ color: "rgb(245,215,150)" }}>
                                    {game.descriptionShort}
                                </p>
                                <Link
                                    to={game.routeToPage}
                                    className="px-5 py-2 rounded-lg transition"
                                    style={{
                                        backgroundColor: "rgb(245,215,150)",
                                        color: "rgb(50,20,100)",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {game.button}
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Games;