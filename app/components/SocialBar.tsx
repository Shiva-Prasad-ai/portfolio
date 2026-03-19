import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialBar() {
    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-xl">

            <a href="https://github.com/shiva-prasad-ai" target="_blank">
                <FaGithub className="hover:text-blue-400 transition" />

            </a>

            <a href="https://linkedin.com" target="_blank">
                <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            <a href="mailto:shivaprasad26005@email.com">
                <FaEnvelope className="hover:text-blue-400 transition" />
            </a>

        </div>
    );
}