import { Navbar, NavbarLink } from "flowbite-react"

const Header = () => {
    return (
        <nav className="sticky top-0 left-0" >
            <nav className="sticky top-0 left-0 bg-white border-b border-gray-200 ">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl text-gray-900 font-semibold">CV Fajar</span>
                        <div className="flex space-x-4 text-gray-900">
                            <a href="#Home">Home</a>
                            <h1>|</h1>
                            <a href="#About">About Me</a>
                            <h1>|</h1>
                            <a href="#Project">Projects</a>
                            <h1>|</h1>
                            <a href="#Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
        
    )
}

export default Header