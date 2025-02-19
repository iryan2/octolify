import octopusLogo from "./assets/octopus-deploy.svg";
import netlifyLogo from "./assets/netlify-icon.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://octopus.com" target="_blank">
          <img src={octopusLogo} className="logo" alt="Octopus logo" />
        </a>
        <a href="https://netlify.com" target="_blank">
          <img src={netlifyLogo} className="logo react" alt="Netlify logo" />
        </a>
      </div>
      <h1>Octopus + Netlify</h1>
    </>
  );
}

export default App;
