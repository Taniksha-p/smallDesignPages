// import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// const NEPPage = () => {
//   // Data for bar and pie charts
//   const barData = {
//     labels: ['Higher Education', 'Vocational Training', 'School Education', 'Teacher Training'],
//     datasets: [{
//       label: 'NEP 2020 Focus Areas',
//       backgroundColor: ['#4A90E2', '#50E3C2', '#9013FE', '#F5A623'],
//       data: [50, 20, 70, 30],
//     }]
//   };

//   const pieData = {
//     labels: ['School Education', 'Vocational Studies', 'Higher Studies', 'Teacher Training'],
//     datasets: [{
//       label: 'Funding Distribution',
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       data: [40, 25, 20, 15],
//     }]
//   };

//   return (
//     <div className="container mx-auto px-4">
//       {/* NEP 2020 Intro Section */}
//       <section className="text-center py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
//         <h1 className="text-5xl font-bold">NEP 2020: A Comprehensive Reform in Education</h1>
//         <p className="mt-4 text-xl">Transforming the landscape of Indian education with innovative policies and progressive goals.</p>
//       </section>

//       {/* Key Features Section */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center mb-8">Key Features of NEP 2020</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-blue-600">Flexible Curriculum</h3>
//             <p className="mt-2 text-gray-600">Students now have the freedom to choose subjects across streams, breaking traditional boundaries. This is represented mathematically by the cross-curricular flexibility model.</p>
//             <img className="mt-4" src="c:\Users\Dell\Desktop\Projects\school\public\largepreview.png" alt="Flexible Curriculum Diagram" />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-blue-600">Multi-disciplinary Education</h3>
//             <p className="mt-2 text-gray-600">Integration of arts, science, and commerce subjects through new multi-disciplinary structures.</p>
//             <Bar data={barData} options={{ responsive: true }} />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-blue-600">Skill Development</h3>
//             <p className="mt-2 text-gray-600">Vocational education integrated with mainstream education with a focus on skill-based learning.</p>
//             <img className="mt-4" src="path_to_image/skills_graph.png" alt="Skills Growth Chart" />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-blue-600">Technology in Education</h3>
//             <p className="mt-2 text-gray-600">Increased focus on digital literacy, coding, and technology-driven education platforms.</p>
//             <img className="mt-4" src="path_to_image/tech_integration.png" alt="Technology in Education Chart" />
//           </div>
//         </div>
//       </section>

//       {/* Progress Tracking Section */}
//       <section className="py-16 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8">Implementation Progress</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-green-600">Schools</h3>
//             <p className="mt-2 text-gray-600">Around 60% of schools have adopted the new curriculum.</p>
//             <p className="mt-2 text-gray-600">Around 60% of schools have adopted the new curriculum with interdisciplinary learning paths for students.</p>
//             <Bar data={{
//               labels: ['Adoption Rate', 'Pending Schools', 'Implementation Challenges'],
//               datasets: [{
//                 label: 'School Adoption Status',
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 data: [60, 30, 10]
//               }]
//             }} options={{ responsive: true }} />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-green-600">Colleges & Universities</h3>
//             <p className="mt-2 text-gray-600">NEP 2020 reforms have influenced about 70% of higher education institutions.</p>
//             <Pie data={pieData} options={{ responsive: true }} />
//           </div>
//         </div>
//       </section>

//       {/* Funding & Resources Section */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center mb-8">Funding & Resource Allocation</h2>
//         <p className="text-center text-lg text-gray-600 mb-8">The funding distribution highlights the focus areas of NEP 2020, ensuring resources are allocated where needed the most.</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-purple-600">Funding Distribution</h3>
//             <Pie data={{
//               labels: ['School Education', 'Vocational Studies', 'Higher Studies', 'Teacher Training'],
//               datasets: [{
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//                 data: [40, 25, 20, 15]
//               }]
//             }} options={{ responsive: true }} />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-purple-600">Technology Investment</h3>
//             <p className="mt-2 text-gray-600">Investment in digital platforms and technology-based learning has increased, driving innovation in the education sector.</p>
//             <img className="mt-4" src="path_to_image/tech_investment_chart.png" alt="Technology Investment Chart" />
//           </div>
//         </div>
//       </section>

//       {/* Mathematical Tools for Better Understanding */}
//       <section className="py-16 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8">Understanding NEP 2020 with Mathematical Models</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-red-600">Curriculum Flexibility Formula</h3>
//             <p className="mt-2 text-gray-600">The cross-disciplinary flexibility can be modeled mathematically to better understand how students can combine various subjects.</p>
//             <img className="mt-4" src="path_to_image/flexibility_formula.png" alt="Flexibility Formula" />
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-2xl font-semibold text-red-600">Skill Gap Analysis</h3>
//             <p className="mt-2 text-gray-600">A quantitative analysis of the skill gap across various regions, showing how NEP 2020 aims to bridge this gap.</p>
//             <img className="mt-4" src="path_to_image/skill_gap_chart.png" alt="Skill Gap Analysis" />
//           </div>
//         </div>
//       </section>

//       {/* Conclusion Section */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center mb-8">Conclusion & Future Goals</h2>
//         <p className="text-center text-lg text-gray-600 mb-8">NEP 2020 represents a significant shift in the Indian education landscape, focusing on holistic, flexible, and multi-disciplinary approaches to education. The future looks promising as more institutions adopt and implement these reforms.</p>
//         <div className="text-center">
//           <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">Learn More</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NEPPage;

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const NEPPage = () => {
  // Data for bar and pie charts
  const barData = {
    labels: ['Higher Education', 'Vocational Training', 'School Education', 'Teacher Training'],
    datasets: [{
      label: 'NEP 2020 Focus Areas',
      backgroundColor: ['#4A90E2', '#50E3C2', '#9013FE', '#F5A623'],
      data: [50, 20, 70, 30],
    }]
  };

  const pieData = {
    labels: ['School Education', 'Vocational Studies', 'Higher Studies', 'Teacher Training'],
    datasets: [{
      label: 'Funding Distribution',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      data: [40, 25, 20, 15],
    }]
  };

  return (
    <div className="container mx-auto px-4">
      {/* NEP 2020 Intro Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h1 className="text-5xl font-bold">NEP 2020: A Comprehensive Reform in Education</h1>
        <p className="mt-4 text-xl">Transforming the landscape of Indian education with innovative policies and progressive goals.</p>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Key Features of NEP 2020</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Flexible Curriculum</h3>
            <p className="mt-2 text-gray-600">Students now have the freedom to choose subjects across streams, breaking traditional boundaries.</p>
            {/* Mathematical explanation */}
            <ul className="mt-4 text-gray-600">
              <li>➤ Flexibility Formula: `F = (Number of Cross-stream Subjects) / (Total Subjects Chosen)`</li>
              <li>➤ A higher value of F represents more flexibility in the curriculum.</li>
              <li>➤ Example: If a student chooses 4 subjects from different streams out of 7, F = 4/7 = 0.57 (57% flexibility).</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Multi-disciplinary Education</h3>
            <p className="mt-2 text-gray-600">Integration of arts, science, and commerce subjects through new multi-disciplinary structures.</p>
            <Bar data={barData} options={{ responsive: true }} />
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Skill Development</h3>
            <p className="mt-2 text-gray-600">Vocational education integrated with mainstream education with a focus on skill-based learning.</p>
            {/* Scientific Bullet Points */}
            <ul className="mt-4 text-gray-600">
              <li>➤ 70% of students to receive vocational training by 2030.</li>
              <li>➤ Courses designed to fill skill gaps in key industries.</li>
              <li>➤ A hands-on approach will involve at least 150 hours of practical skill training per semester.</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Technology in Education</h3>
            <p className="mt-2 text-gray-600">Increased focus on digital literacy, coding, and technology-driven education platforms.</p>
            {/* Coding Integration Explanation */}
            <ul className="mt-4 text-gray-600">
              <li>➤ Digital literacy for all students from Class 6 onward.</li>
              <li>➤ Mandatory coding courses starting from Class 8.</li>
              <li>➤ Online education platforms to reach rural areas: Projected growth of 35% in tech adoption in schools.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Implementation Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Schools</h3>
            <p className="mt-2 text-gray-600">Around 60% of schools have adopted the new curriculum with interdisciplinary learning paths for students.</p>
            <Bar data={{
              labels: ['Adoption Rate', 'Pending Schools', 'Implementation Challenges'],
              datasets: [{
                label: 'School Adoption Status',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                data: [60, 30, 10]
              }]
            }} options={{ responsive: true }} />
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">Colleges & Universities</h3>
            <p className="mt-2 text-gray-600">NEP 2020 reforms have influenced about 70% of higher education institutions.</p>
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
        </div>
      </section>

      {/* Funding & Resources Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Funding & Resource Allocation</h2>
        <p className="text-center text-lg text-gray-600 mb-8">The funding distribution highlights the focus areas of NEP 2020, ensuring resources are allocated where needed the most.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">Funding Distribution</h3>
            <Pie data={pieData} options={{ responsive: true }} />
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">Technology Investment</h3>
            {/* Scientific Data Representation */}
            <ul className="mt-4 text-gray-600">
              <li>➤ Government plans to invest ₹1000 crore in tech integration by 2025.</li>
              <li>➤ 30% of the budget allocated for developing new e-learning platforms.</li>
              <li>➤ Expected 50% increase in student engagement with online courses.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mathematical Tools for Better Understanding */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Understanding NEP 2020 with Mathematical Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-red-600">Curriculum Flexibility Formula</h3>
            <p className="mt-2 text-gray-600">The cross-disciplinary flexibility can be modeled mathematically to better understand how students can combine various subjects.</p>
            {/* Bullet Points for Better Clarity */}
            <ul className="mt-4 text-gray-600">
              <li>➤ Formula: `F = (Number of Cross-stream Subjects) / (Total Subjects Chosen)`</li>
              <li>➤ This formula highlights the level of flexibility a student has in the curriculum.</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-red-600">Skill Gap Analysis</h3>
            <p className="mt-2 text-gray-600">A quantitative analysis of the skill gap across various regions, showing how NEP 2020 aims to bridge this gap.</p>
            <ul className="mt-4 text-gray-600">
              <li>➤ 30% increase in job-ready students after adopting NEP reforms.</li>
              <li>➤ Region-wise distribution shows a 15% improvement in rural areas.</li>
            </ul>
          </div>
        </div>
        </section>
        <section className="py-16">
         <h2 className="text-4xl font-bold text-center mb-8">Conclusion & Future Goals</h2>
         <p className="text-center text-lg text-gray-600 mb-8">NEP 2020 represents a significant shift in the Indian education landscape, focusing on holistic, flexible, and multi-disciplinary approaches to education. The future looks promising as more institutions adopt and implement these reforms.</p>
         <div className="text-center">
           <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">Learn More</button>
         </div>
       </section>
     
</div>
  );
}
export default NEPPage