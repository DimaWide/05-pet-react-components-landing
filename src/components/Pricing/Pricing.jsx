import React from 'react';
import './Pricing.scss';
import { AiOutlineCheck  } from 'react-icons/ai'; // Example icon

const PlanCard = ({ name, price, features, description }) => (
    <div className='data-item'>
        <div className="data-item-inner">
            <h3 className='data-item-title'>{name}</h3>

            <div className='data-item-price'>{price}</div>

            <div className='data-item-desc'>{description}</div>

            <ul className='data-item-features'>
                {features.map((feature, idx) => (
                    <li key={idx}>
                       <AiOutlineCheck  /> 
                        {feature}
                    </li>
                ))}
            </ul>

            <button className='data-item-button'>Get Started</button>
        </div>
    </div>
);

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '19.90 $/month',
            description: 'Great for individuals just starting out.',
            features: ['Unlimited tasks', '24/7 support', 'Mobile app access'],
        },
        {
            name: 'Standard',
            price: '29.90 $/month',
            description: 'Perfect for small teams and businesses.',
            features: ['All Basic plan features', 'Priority support', 'Task analytics'],
        },
        {
            name: 'Premium',
            price: '39.90 $/month',
            description: 'Best choice for growing businesses.',
            features: ['All Standard plan features', 'Custom reports', 'Personal manager'],
        },
    ];

    return (
        <section className='cmp-pricing'>
            <div className='data-container wcl-container'>
                <h2 className='data-title'>Choose Your Plan</h2>

                <div className='data-subtitle'>Select the plan that best fits your needs and start enjoying our premium features.</div>

                <div className='data-list'>
                    {plans.map((plan, index) => (
                        <PlanCard
                            key={index}
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
