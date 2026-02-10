import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={toggle}
            >
                <span className="text-xl font-bold text-brand-navy group-hover:text-brand-green transition-colors">
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-brand-gray text-lg">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const faqs = [
        {
            question: "Who can volunteer with Dev Next Foundation?",
            answer: "We welcome passionate individuals from diverse backgrounds. Whether you're a tech professional, educator, or student, there's a place for you to contribute."
        },
        {
            question: "How much time do I need to commit?",
            answer: "Time commitments vary by role. We offer flexible options based on availability, ranging from a few hours a week to monthly workshops."
        },
        {
            question: "Is volunteering remote or in-person?",
            answer: "We have both remote and in-person opportunities depending on the program and your location. Most of our school programs require in-person attendance."
        },
        {
            question: "What happens after I submit the form?",
            answer: "Our team will review your application and contact you within 3-5 business days to discuss next steps and match you with a suitable program."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center space-x-2 text-brand-green font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
                            What You’re Thinking,<br />We Answered.
                        </h2>
                        <p className="text-brand-gray text-lg">
                            Find helpful answers to common questions about donating, volunteering & fundraising.
                        </p>
                    </div>
                    <div className="lg:w-2/3 border-t border-gray-200">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
