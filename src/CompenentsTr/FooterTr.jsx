import React from 'react';
import { Link } from 'react-scroll';
import { navbarElementsTr } from './NavbarTr';
import logo from '../Images/MIUGames_5.jpg';
import { useNavigate } from 'react-router-dom';

function FooterTr() {
    const footerDate = new Date();
    const footerYear = footerDate.getFullYear();

    return (
        <div>
            <footer id='footertr' className="p-6 md:p-10 lg:p-12 bg-[rgb(50,15,100)]">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-[rgb(255,215,180)]">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-16 md:h-20 lg:h-24 w-auto mx-auto opacity-90 drop-shadow-lg"
                        />
                    </a>
                    <p className="my-6 text-[rgb(255,215,180,0.8)]">
                        Küçük açıklama lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur voluptas excepturi facilis,
                        tenetur cumque sunt nisi repellendus dolores ipsa officiis similique distinctio nam sit nostrum dignissimos veritatis laboriosam.
                        Laudantium.
                    </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-[rgb(255,215,180)]">
                        {navbarElementsTr.map((element, index) => (
                            <li key={index} className="mx-3">
                                <Link
                                    to={element.path}
                                    smooth={true}
                                    duration={500}
                                    className="text-[rgb(255,215,180)] text-xl hover:text-[rgb(190,170,250)] transition-colors duration-300 cursor-pointer"
                                >
                                    {element.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <span className="text-sm text-[rgb(255,215,180)] sm:text-center">
                        © {footerYear} <a href="#" className="hover:underline hover:text-[rgb(190,170,250)] transition-all duration-300">
                            Miu Games
                        </a>. Haklarına saklıdır.
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default FooterTr;