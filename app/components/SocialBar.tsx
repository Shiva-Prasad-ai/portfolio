import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialBar() {
    return (

        <div id="social" className="fixed right-5 top-1/5 -translate-y-1/5 flex flex-col gap-7 text-xl">

            <a href="https://github.com/shiva-prasad-ai" target="_blank">

                <FaGithub size={28} className="hover:text-blue-400 transition" />

            </a>

            <a href="https://linkedin.com" target="_blank">
                <FaLinkedin size={28} className="hover:text-blue-400 transition" />
            </a>

            <a href="mailto:shivaprasad26005@gmail.com">
                <FaEnvelope size={28} className="hover:text-blue-400 transition" />
            </a>

        </div>
    );
}
