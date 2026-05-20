import "./EmployeeProfile.css";
 
function EmployeeProfile({ name, id, department }) {
  return (
    <div className="profile-card">
      <h3>Employee Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Employee ID:</strong> {id}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}
 
export default EmployeeProfile;
