import React from 'react';

const InputIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const AIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff8600]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" /></svg>;
const OutputIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;

const SolutionPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Overview */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#160578]">The End-to-End Automated Credit Lifecycle</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Credtics is more than a tool; it's a complete operating system for modern MFI lending. We automate every step from application to decision, freeing your team to focus on what matters most: your clients.
          </p>
        </section>

        {/* Section 2: AI Engine */}
        <section className="mb-24">
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
                <li>Traditional Data (Credit History, Financials)</li>
                <li>Non-Traditional Data (Utility Payments, Mobile Data)</li>
                <li>Application & KYC Information</li>
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
                <li>Instant Credit Score</li>
                <li>Comprehensive Risk Recommendation</li>
                <li>Optimized Loan Recommendation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: User Experience */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160578]">A Superior Experience for Everyone</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored interfaces that empower both borrowers and your team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#160578] mb-3">For Borrowers</h3>
              <p className="text-gray-600">
                A seamless, fast, and transparent application process leads to rapid decisions. This builds trust and satisfaction, improving client retention and enabling quicker access to vital capital.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#160578] mb-3">For Loan Officers</h3>
              <p className="text-gray-600">
                Freed from the burden of manual data entry and paperwork, loan officers can dedicate their time to building strong client relationships, providing financial guidance, and driving portfolio growth.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SolutionPage;