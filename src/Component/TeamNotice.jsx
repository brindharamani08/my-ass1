import "./TeamNotice.css";
 
function TeamNotice({ meeting, message }) {
  if (!meeting) return null;
  return (
    <div className="notice-card">
      <h3>Team Notices</h3>
      <p>⚠️ {message}</p>
    </div>
  );
}
 
export default TeamNotice;
