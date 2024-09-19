import { useState } from 'react'
import CC from './components/CC'
import CounselorTrainingPage from './components/CounselorTrainingPage'
import NEPPage from './components/NEPPage'
import VirtualInternships from './components/VirtualInternships'
import StaticAnalysisPage from './components/StaticAnalysisPag'
import FeaturesPage from './components/FeaturesPage'
import LoginPage from './components/LoginPage'

function App() {
 

  return (
    <>
    {/* <CounselorTrainingPage/> */}
    {/* <CC/> */}
    {/* <NEPPage/> */}
    {/* <VirtualInternships/> */}
    {/* <StaticAnalysisPage/> */}
    {/* <FeaturesPage/> */}
    {/* <FeasibilityPage/> */}
    <LoginPage/>
    </>
  )
}

export default App


// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import FeaturesPage from './components/FeaturesPage';
// import Workflow from './components/WorkFlow';
// import FeasibilityPage from './components/FeasibilityPage';

// const App = () => {
//   return (
//     <Router>
//       <nav className="p-4 bg-gray-800 text-white">
//         <ul className="flex space-x-4">
//           <li><Link to="/">Features</Link></li>
//           <li><Link to="/workflow">Workflow & Tech Stack</Link></li>
//           <li><Link to="/feasibility">Feasibility & Liability</Link></li>
//         </ul>
//       </nav>
// {/*       
//       <Switch>
//         <Route exact path="/" component={FeaturesPage} />
//         <Route path="/workflow" component={Workflow} />
//         <Route path="/feasibility" component={FeasibilityPage} />
//       </Switch> */}
//     </Router>
//   );
// };

// export default App;
