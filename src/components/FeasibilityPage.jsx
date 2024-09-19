import React from 'react';

const FeasibilityPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Feasibility Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Feasibility of Static Analysis Framework</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600">Feasibility Analysis</h3>
          <ul className="list-disc ml-8 mt-4 text-lg text-gray-700">
            <li>Efficient integration with existing Android Studio workflows.</li>
            <li>Low performance overhead during development due to the automated nature of the tools.</li>
            <li>Scalability to larger projects with multiple codebases.</li>
            <li>Cost-effective due to the use of open-source tools like SonarQube and PMD.</li>
          </ul>
        </div>
      </section>

      {/* Liability Section */}
      <section className="py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">Liability Factors</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-red-600">Potential Risks & Liabilities</h3>
          <ul className="list-disc ml-8 mt-4 text-lg text-gray-700">
            <li>Failure to detect some security vulnerabilities due to tool limitations.</li>
            <li>Liability of missing critical vulnerabilities if not paired with dynamic testing.</li>
            <li>Legal implications if vulnerabilities are not fixed before deployment, potentially exposing user data.</li>
            <li>Initial learning curve for developers integrating static analysis tools into the pipeline.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FeasibilityPage;
