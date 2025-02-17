
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const Price = () => {
  const plans = [
    { name: 'Starter', price: '$499/month', features: ['2 AI Agent Instances', 'Basic Neural Processing', '24/7 Support', 'Weekly Analytics', 'Basic Integration Support'] },
    { name: 'Professional', price: '$999/month', features: ['10 AI Agent Instances', 'Advanced Neural Networks', 'Priority Support', 'Real-time Analytics', 'Custom Integration', 'API Access', 'Advanced Security'] },
    { name: 'Enterprise', price: '$Custom', features: ['Unlimited Agents', 'Full Neural Suite', 'Dedicated Support Team', 'Advanced Analytic Dashboard', 'Custom Development', 'Full API Access', 'Enterprise Security', 'Custom Training'] }
  ];

  return (
    <div id='price'>
    <section className="text-gray-600 body-font bg-black py-24 px-5">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-purple-500 mb-4">Choose Your Plan</h1>
        <p className="text-2xl text-white">Scale your AI capabilities with our flexible pricing</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4 transform hover:scale-105 transition duration-300">
            <div className="p-6 rounded-lg border border-gray-800 bg-[#3a3a3c55] text-white">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <h1 className="text-4xl font-semibold mb-4 border-b border-gray-200 pb-4">{plan.price}</h1>
              {plan.features.map((feature, i) => (
                <p key={i} className="flex items-center mb-2 font-semibold">
                  <FaRegCheckCircle className='text-purple-700 mr-2' /> {feature}
                </p>
              ))}
              <button className="mt-6 w-full py-2 bg-purple-700 rounded-lg text-lg">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Price;
