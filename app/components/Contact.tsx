export default function Contact() {
    return (
        <section id="contact" className="p-10 text-center">
            <h2 className="text-3xl mb-6">Contact</h2>

            <p className="text-gray-400 mb-4">
                Interested in working together or have a question?
            </p>

            <a
                href="mailto:shivaprasad26005@gmail.com"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
                Email Me
            </a>
        </section>
    );
}