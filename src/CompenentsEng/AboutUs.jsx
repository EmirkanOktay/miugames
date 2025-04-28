export default function AboutUs() {
    return (
        <div className="py-16 px-8 text-center" style={{ backgroundColor: "RGB(58, 15, 120)" }}>
            <section id="about">
                <h2 className="text-4xl font-[1000] text-[rgb(245,230,200)]">About Us</h2>
                <p className="mt-4 text-lg text-[rgb(245,230,200)] max-w-3xl mx-auto">
                    We are a dedicated team focused on delivering innovative and high-quality solutions.
                    Our mission is to create meaningful experiences through technology and design.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 rounded-lg shadow-md border border-[rgb(245,230,200,0.5)]"
                        style={{ backgroundColor: "rgb(245,230,200,0.2)" }}>
                        <h3 className="text-2xl font-semibold text-[rgb(245,230,200)]">Our Mission</h3>
                        <p className="mt-2 text-[rgb(245,230,200)]">
                            To push the boundaries of innovation and provide impactful solutions
                            that enhance everyday life.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-md border border-[rgb(245,230,200,0.5)]"
                        style={{ backgroundColor: "rgb(245,230,200,0.2)" }}>
                        <h3 className="text-2xl font-semibold text-[rgb(245,230,200)]">Our Vision</h3>
                        <p className="mt-2 text-[rgb(245,230,200)]">
                            To be a leader in technology and creativity, making a difference in the world
                            through our work.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
