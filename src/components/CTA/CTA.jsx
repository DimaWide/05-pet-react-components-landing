import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What is your product?',
            answer: 'Our product is a high-quality solution for task and project management.',
        },
        {
            question: 'How can I register?',
            answer: 'You can register by clicking the "Sign Up" button on the homepage.',
        },
        {
            question: 'How can I contact support?',
            answer: 'You can reach our support team via email or through the contact form on the website.',
        },
        {
            question: 'Do you have a mobile app?',
            answer: 'Yes, we have a mobile app available for iOS and Android.',
        },
        {
            question: 'What is your refund policy?',
            answer: 'We offer a 30-day money-back guarantee if the product does not meet your expectations.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden"
                        >
                            <div
                                className="flex justify-between items-center p-6 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-xl font-semibold text-blue-800">{faq.question}</h3>

                                <span className={`text-blue-600 transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    ▼
                                </span>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-40 p-6' : 'max-h-0 p-0'}`}
                            >
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
