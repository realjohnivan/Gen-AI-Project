import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#160578]">Powering Financial Inclusion Through Intelligent Automation</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We solve a fundamental operational inefficiency in microfinance that has profound social and economic implications. Our mission is to provide MFIs with the technology to be more efficient, profitable, and impactful, ultimately making credit more accessible and affordable for underserved entrepreneurs.
          </p>
        </section>

        {/* Future Vision Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">Our Vision: The Foundational OS for Microfinance</h2>
            <p className="mt-4 text-lg text-gray-600">Our roadmap is focused on creating a fully autonomous, connected lending ecosystem.</p>
          </div>
          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff8600]/20 text-[#ff8600] flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#160578]">Advanced AI Customization</h4>
                  <p className="text-gray-600">Evolving our models to be more adaptive to specific MFI risk appetites and local market nuances, with real-time adjustments and self-learning capabilities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff8600]/20 text-[#ff8600] flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#160578]">Full Lending Lifecycle Automation</h4>
                  <p className="text-gray-600">Expanding beyond applications to automate loan monitoring, create early warning systems for defaults, and deploy intelligent debt recovery strategies.</p>
                </div>
              </li>
              <li className="flex items-start">
                 <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff8600]/20 text-[#ff8600] flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#160578]">Ecosystem Integration</h4>
                  <p className="text-gray-600">Seamlessly integrating with payment gateways, e-commerce platforms, and government identity systems to create a truly connected and efficient lending experience.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Ethical AI Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">Our Commitment to Ethical AI</h2>
            <p className="mt-4 text-lg text-gray-600">Building trust is paramount. Our platform is designed with responsibility at its core.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-xl text-[#160578] mb-2">Fairness</h4>
              <p className="text-gray-600">Continuously audited algorithms to mitigate bias and ensure equitable decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-xl text-[#160578] mb-2">Transparency</h4>
              <p className="text-gray-600">Clear, understandable criteria for both loan officers and regulators.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-xl text-[#160578] mb-2">Explainability</h4>
              <p className="text-gray-600">Providing the 'why' behind every AI-driven recommendation and decision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-xl text-[#160578] mb-2">Security</h4>
              <p className="text-gray-600">Robust data privacy and security protocols to protect sensitive client information.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;