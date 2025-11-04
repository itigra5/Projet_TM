import './Layout.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div id="header">
      <span className="head" id="LogoSite">
      <img src="/images/logo.png" alt="Ucrea logo" className="header_logo" /></span> 
      <span className="head" id="PageName"></span>

      {/* Ajout du bouton cœur */}
      <button
        className="favorite-link"
        aria-label="Aller à mes favoris"
        onClick={() => navigate("/favoris")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="favorite-icon"
        >
         <path d="M12 21s-6.7-4.5-9.3-8.1C.8 10.2 1.4 6.6 4.3 4.6c2.1-1.5 5-1.2 6.9.7L12 5.9l0.8-.6c1.9-1.9 4.8-2.2 6.9-.7 2.9 2 3.5 5.6 1.6 8.3C18.7 16.5 12 21 12 21z" />
        </svg>

      </button>
    </div>
  );
}

export default Header;