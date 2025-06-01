import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)

    // Change menu visibility
    const toggleMenu = () => {
        setOpen(!isOpen)
    }

    // Navbar links
    const navbarLinks = [
        { id: 1, text: "Home", link: "/" },
        { id: 2, text: "Career", link: "/" },
        { id: 3, text: "Calendar", link: "/" },
        { id: 4, text: "Team", link: "/" },
        { id: 5, text: "Alpine f1", link: "/" }
    ]

    // Social icons
    const socialIcons = [
        { id: 1, className: 'bi bi-behance', link: 'https://www.behance.net/joreynoso' },
        { id: 2, className: 'bi bi-github', link: 'https://github.com/Joreynoso' }
    ]

    // Header links formatted
    const menuLinksClean = navbarLinks.map(link => (
        <li key={link.id}>
            <a
                href={link.link}
                className="hover:text-[#5301DA] text-lg transition-colors duration-300 font-formula">
                {link.text}
            </a>
        </li>
    ))

    // Social icons formatted
    const socialIconsClean = socialIcons.map(icon => (
        <li key={icon.id}>
            <a href={icon.link} target='_blank'>
                <i className={`${icon.className} text-lg text-white hover:text-[#5301DA] transition-colors duration-300`}></i>
            </a>
        </li>
    ))

    // --> Return Component
    return (
        <nav className='relative w-full flex flex-col justify-center items-center lg:px-20 py-5 px-5 mx-auto'>

            {/* Desktop Menu */}
            <div className='w-full flex justify-between items-center'>

                {/* Logo F1 */}
                <div className='logo w-32'>
                    <img
                        src={logo}
                        alt="logo f1"
                        className='w-32'
                    />
                </div>

                {/* Burger menu */}
                <div className='menu-burger block lg:hidden' onClick={toggleMenu}>
                    <button className='flex justify-center items-center cursor-pointer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10 text-white">
                            {!isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navbar links desktop */}
                <div className='navbar links hidden lg:block'>
                    <ul className='flex text-white gap-6'>
                        {menuLinksClean}
                    </ul>
                </div>

                {/* Social icons desktop */}
                <div className='navbar links hidden lg:block'>
                    <ul className='flex text-white gap-4'>
                        {socialIconsClean}
                    </ul>
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='
                py-2 absolute 
                top-20 left-0 
                w-full 
                bg-[#15151F] 
                border-2 border-[#224354] 
                rounded-2xl z-50 
                links flex flex-col 
                items-center 
                lg:hidden'>

                    {/* Links */}
                    <div>
                        <ul className='flex flex-col text-center text-white gap-4'>
                            {menuLinksClean}
                        </ul>
                    </div>

                    <hr className="text-center w-full border-t border-[#2C2C35] my-2" />

                    {/* Social icons */}
                    <div className='w-full flex justify-center items-center'>
                        <ul className='flex text-white gap-4'>
                            {socialIconsClean}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}

