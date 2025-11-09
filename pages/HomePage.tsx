import React from 'react';
import { Button } from '../components/Button';
import { IconCard } from '../components/IconCard';

const SpeedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const CostIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
);
const RiskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const InputIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const AIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff8600]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" /></svg>;
const OutputIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;


const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#160578] leading-tight">
            From <span className="text-[#ff8600]">Days to Under 10 Minutes:</span> AI-Powered Credit Decisions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Credtics transforms the microfinance lending process with intelligent automation, enabling faster, cheaper, and smarter credit decisions that foster economic growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button>Request a Demo</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">Unlock Unprecedented Efficiency</h2>
            <p className="mt-4 text-lg text-gray-600">The measurable financial impact of intelligent automation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard 
              icon={<SpeedIcon />}
              title={<>Cut Approval Time <br/> <span className="text-[#ff8600]">3-5 Days to &lt;10 Min</span></>}
              description="Automate data collection and analysis to deliver instant, reliable credit decisions, delighting borrowers and empowering loan officers."
            />
            <IconCard 
              icon={<CostIcon />}
              title={<><span className="text-[#ff8600]">40% Operational</span><br/> Savings</>}
              description="Eliminate manual paperwork, reduce human error, and reallocate resources from administrative tasks to client relationships and growth."
            />
            <IconCard 
              icon={<RiskIcon />}
              title={<>Superior Risk <br/> Assessment via <span className="text-[#ff8600]">AI</span></>}
              description="Leverage traditional and non-traditional data to build more accurate risk profiles, reducing defaults and improving portfolio health."
            />
          </div>
        </div>
      </section>
      
      {/* AI Engine Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">The Credtics AI Engine</h2>
            <p className="mt-4 text-lg text-gray-600">Transforming diverse data into actionable intelligence.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Inputs */}
            <div className="w-full md:w-1/3 p-6 bg-white border border-gray-200 shadow-sm rounded-lg text-center">
              <div className="flex justify-center mb-4"><InputIcon /></div>
              <h3 className="text-2xl font-bold text-[#160578] mb-2">Inputs</h3>
              <p className="text-gray-600">Our smart data processor aggregates information from multiple sources.</p>
              <ul className="mt-4 text-left space-y-2 text-gray-700 list-disc list-inside">
                <li>KYC Documents & Application Data</li>
                <li>Formal Credit Bureau Scores</li>
                <li>Mobile Money & Utility Payments</li>
              </ul>
            </div>

            <div className="hidden md:block"><ArrowIcon /></div>
            <div className="block md:hidden rotate-90 my-4"><ArrowIcon /></div>

            {/* AI Core */}
            <div className="w-full md:w-1/3 p-6 bg-[#160578] border-2 border-[#ff8600] rounded-lg text-center shadow-2xl shadow-[#ff8600]/20">
              <div className="flex justify-center mb-4"><AIIcon /></div>
              <h3 className="text-2xl font-bold text-[#ff8600] mb-2">Predictive Decision Engine</h3>
              <p className="text-gray-300">At the core, our AI models analyze, score, and recommend.</p>
            </div>
            
            <div className="hidden md:block"><ArrowIcon /></div>
            <div className="block md:hidden rotate-90 my-4"><ArrowIcon /></div>

            {/* Outputs */}
            <div className="w-full md:w-1/3 p-6 bg-white border border-gray-200 shadow-sm rounded-lg text-center">
              <div className="flex justify-center mb-4"><OutputIcon /></div>
              <h3 className="text-2xl font-bold text-[#160578] mb-2">Outputs</h3>
              <p className="text-gray-600">Delivering clear, instant, and data-driven results.</p>
              <ul className="mt-4 text-left space-y-2 text-gray-700 list-disc list-inside">
                <li>AI-Generated Credit Score</li>
                <li>Comprehensive Risk Recommendation</li>
                <li>Loan Terms Recommendation</li>
                <li>Fraud & Anomaly Flags</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">A Superior Experience for Everyone</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored interfaces that empower both borrowers and your team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#160578] mb-3">For Borrowers</h3>
              <p className="text-gray-600">
                A seamless, mobile-friendly application process transforms a multi-day wait into a near-real-time experience. This builds trust, improves satisfaction, and delivers capital when it's needed most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#160578] mb-3">For Loan Officers</h3>
              <p className="text-gray-600">
                Freed from tedious data entry and manual risk assessment, loan officers can focus on high-value tasks: building client relationships, managing complex cases, and driving portfolio growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Target Audience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#160578]">Designed for Microfinance in Emerging Markets</h2>
            <p className="mt-4 text-lg text-gray-600">
                Credtics is meticulously designed for Microfinance Institutions. We empower you to overcome operational bottlenecks, scale loan books efficiently, and deepen your impact on the millions of MSMEs that form the backbone of local economies.
            </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;