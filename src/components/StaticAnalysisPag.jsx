import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Data for pie and bar charts
const vulnerabilityData = {
  labels: ['Insecure API Usage', 'Improper Permissions', 'Injection Points', 'Hardcoded Credentials'],
  datasets: [{
    label: 'Types of Vulnerabilities Detected',
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    data: [30, 20, 25, 25],
  }]
};

const severityData = {
  labels: ['Low', 'Medium', 'High', 'Critical'],
  datasets: [{
    label: 'Vulnerability Severity Breakdown',
    backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384', '#36A2EB'],
    data: [15, 30, 35, 20],
  }]
};

const StaticAnalysisPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Introduction */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-400 to-blue-500 text-white">
        <h1 className="text-5xl font-bold">Static Analysis for Android Application Security</h1>
        <p className="mt-4 text-xl">Detect and mitigate vulnerabilities early in the development process to ensure a secure Android application.</p>
      </section>

      {/* Framework Overview */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Static Analysis Framework Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Preparation</h3>
            <p className="mt-2 text-gray-600">Involves gathering requirements, determining objectives, and selecting tools for analysis.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Code Review</h3>
            <p className="mt-2 text-gray-600">Manual and automated reviews to identify coding flaws, like hardcoded credentials and insecure data storage.</p>
          </div>
        </div>
      </section>

      {/* Real-time Data with Charts */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Vulnerability Detection & Severity Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Vulnerability Types</h3>
            <Pie data={vulnerabilityData} options={{ responsive: true }} />
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Severity Levels</h3>
            <Bar data={severityData} options={{ responsive: true }} />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Challenges</h2>
        <ul className="list-disc ml-8 text-lg text-gray-700">
          <li>Keeping up with rapidly changing security threats.</li>
          <li>Ensuring the analysis covers all aspects of the codebase.</li>
          <li>Maintaining a balance between performance and security.</li>
        </ul>
      </section>

      {/* Features, Viability, and Feasibility Section */}
      <section className="py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">Features, Viability & Feasibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Features</h3>
            <p className="mt-2 text-gray-600">Early detection of vulnerabilities, automated scans, integration with CI/CD pipelines.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Viability</h3>
            <p className="mt-2 text-gray-600">Real-time vulnerability scanning is feasible in modern development cycles.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Feasibility</h3>
            <p className="mt-2 text-gray-600">Readily integratable with existing development environments and tools like Android Studio and Gradle.</p>
          </div>
        </div>
      </section>

      {/* Proposed Workflow Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Proposed Workflow</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600">Step-by-Step Workflow</h3>
          <ul className="list-disc ml-8 text-lg text-gray-700">
            <li>Prepare the codebase and gather requirements for static analysis.</li>
            <li>Run automated tools (e.g., MobSF, SonarQube) to detect vulnerabilities.</li>
            <li>Manually review high-severity issues and conduct code-level investigations.</li>
            <li>Generate detailed reports with risk ratings for each vulnerability.</li>
            <li>Collaborate with the development team for fixes and re-runs.</li>
            <li>Integrate fixes into the CI/CD pipeline for continuous improvement.</li>
          </ul>
        </div>
      </section>

      {/* Research Integration Section */}
      <section className="py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">Research Integration</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg text-gray-700">By integrating state-of-the-art research in Android security, including machine learning-based vulnerability detection, we can automate the process and identify even previously unknown vulnerabilities.</p>
        </div>
      </section>
    </div>
  );
};

export default StaticAnalysisPage;
