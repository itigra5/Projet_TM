import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/welcome"); // redirection si pas de token
    }
    else{
        setChecked(true);
    }
  }, [navigate]);

  if (!checked) return null;

  return <>{children}</>; // affiche les enfants si token présent
}