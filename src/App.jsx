import "./App.css";
import Header from "./Component/Header";
import EmployeeProfile from "./Component/EmployeeProfile";
import ProjectsList from "./Component/ProjectsList";
import TeamNotice from "./Component/TeamNotice";
import Footer from "./Component/Footer";
 
function App() {
  const projects = [
    "Advanced Threat Protection",
    "Legacy Mainframe Optimization",
    "AI/ML for Predictive Maintenance",
    "Data Privacy Compliance Audit",
  ];
 
  return (
    <div className="app">
      <div className="dashboard">
        <Header />
        <EmployeeProfile
          name="Brindha AK"
          id="WIPROF112"
          department="Global IT Infrastructure(Kce)"
        />
        <ProjectsList projects={projects} />
        <TeamNotice meeting={true} message="Team meeting today at 4:00 PM — attendance mandatory." />
        <Footer />
      </div>
    </div>
  );
}
 
export default App;
