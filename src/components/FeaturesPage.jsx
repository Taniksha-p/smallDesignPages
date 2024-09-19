import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Features of Static Analysis Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Real-Time Vulnerability Detection</h3>
            <p className="mt-2 text-gray-600">
              This feature allows early detection of vulnerabilities like improper permissions, hardcoded credentials, and insecure API usage in real-time during the development process.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Automated Code Review</h3>
            <p className="mt-2 text-gray-600">
              The framework integrates automated tools to scan code for security flaws, reducing manual effort and human error.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">CI/CD Integration</h3>
            <p className="mt-2 text-gray-600">
              Automated scans can be seamlessly integrated into CI/CD pipelines, ensuring vulnerabilities are detected and fixed before production releases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
