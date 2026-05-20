import "./ProjectsList.css";
 
function ProjectsList({ projects }) {
  return (
    <div className="projects-card">
      <h3>Current Projects</h3>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default ProjectsList;
