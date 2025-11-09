import React from 'react';

const faqData = [
  {
    question: 'What is Credtics?',
    answer: 'Credtics is an AI-powered, fully automated credit management platform meticulously designed for Microfinance Institutions (MFIs). Our core purpose is to transform the cumbersome, multi-day loan application and approval process into a seamless, intelligent, and near-instantaneous digital workflow.'
  },
  {
    question: 'Who is Credtics for?',
    answer: 'Our platform is built for MFIs in emerging economies. We serve key decision-makers like CTOs, Heads of Operations, and CFOs who need to enhance efficiency and ROI, as well as Loan Officers who need better tools to automate routine tasks and focus on client relationships.'
  },
  {
    question: 'How does the AI model work?',
    answer: 'Our AI acts as a smart data processor and a predictive decision engine. It ingests diverse data—including KYC documents, bank statements, mobile money history, and utility payments—and uses Machine Learning (ML) for credit scoring, Natural Language Processing (NLP) to extract information from documents, and Anomaly Detection to flag potential fraud.'
  },
  {
    question: 'What makes Credtics different?',
    answer: 'Credtics offers three core differentiators: 1) Unmatched Speed: We slash loan approval times from 3-5 days to under 10 minutes. 2) Drastic Cost Reduction: Our automation delivers up to 40% in operational savings. 3) Purpose-Built for Emerging Markets: We are designed from the ground up to handle diverse data sources and the specific regulatory challenges of your environment.'
  },
  {
    question: 'Is our data secure with Credtics?',
    answer: 'Absolutely. Data security and privacy are paramount. We employ robust, bank-grade security protocols and encryption to protect all sensitive client information. Our platform is designed to be compliant with data privacy regulations.'
  },
  {
    question: 'How long does integration take?',
    answer: 'Integration time can vary depending on the complexity of your existing systems. However, our platform is built with flexible APIs for a smooth integration process. We work closely with your technical team to ensure a swift and seamless transition, typically taking a few weeks.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer comprehensive support to all our partners. This includes dedicated technical support during the integration process, training for your loan officers and staff, and ongoing customer service to ensure you are getting the most value out of the Credtics platform.'
  }
];

const FAQPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#160578]">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="group bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:border-[#ff8600]">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-semibold text-[#160578] text-lg font-serif">{faq.question}</span>
                <span className="text-[#ff8600] transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;