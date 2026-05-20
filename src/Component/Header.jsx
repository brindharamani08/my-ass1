import "./Header.css";
 
function Header() {
  const hour = new Date().getHours();
  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if (hour >= 17) greeting = "Good Evening";
 
  return (
    <div className="header">
      <h1>{greeting}!</h1>
      <h2>Welcome to your Wipro Dashboard.</h2>
    </div>
  );
}
 
export default Header;
