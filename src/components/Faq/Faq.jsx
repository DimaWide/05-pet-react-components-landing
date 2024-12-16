import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './Faq.scss'; // Import SCSS styles

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [height, setHeight] = useState('0px');
    const answerRef = useRef(null);

    const faqs = [
        {
            question: "How can I change my password?",
            answer: "To change your password, go to the 'Settings' section and select 'Change Password. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minima natus, possimus quasi modi doloremque dolorem odio autem et atque commodi eveniet eligendi, officia cumque in hic dicta repellendus quod?",
        },
        {
            question: "Where can I find my order history?",
            answer: "Your order history is available in the 'My Orders' section of your profile. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            question: "How can I cancel my subscription?",
            answer: "To cancel your subscription, go to 'Subscriptions' and select 'Cancel.' Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team through the feedback form on the website.",
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (activeIndex !== null) {
            setHeight(`${answerRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [activeIndex]);

    return (
        <div className="cmp-1-faq" id='faq'>
            <div className="cmp1-container wcl-container">
                <h2 className="cmp1-title">Frequently Asked Questions</h2>

                <div className="cmp1-faqList">
                    {faqs.map((faq, index) => (
                        <div key={index} className="cmp1-item">
                            <div className="cmp1-item-question" onClick={() => toggleFaq(index)}>
                                <h4 className="cmp1-item-title">{faq.question}</h4>
                                <span>{activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                            </div>

                            <div
                                ref={activeIndex === index ? answerRef : null}
                                className="cmp1-item-answer"
                                style={{
                                    maxHeight: activeIndex === index ? height : '0px', // Use the calculated height
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease', // Transition effect
                                }}
                            >
                                <div className="cmp1-item-answer-inner">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
