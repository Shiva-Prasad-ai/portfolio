export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 border-b border-gray-800 backdrop-blur-md sticky top-0">
            <h1 className="text-xl font-bold">Shiva Prasad</h1>

            <div className="space-x-6">
                <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
        </nav>
    );
}