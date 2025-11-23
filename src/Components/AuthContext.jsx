import { createContext, useContext, useState, useEffect } from "react";

// 1. Crée le contexte
const AuthContext = createContext();

// 2. Crée le provider
export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Vérifie si un token est présent au chargement de l'app
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1])); // décodage simple JWT
        setUserId(decoded.id_user); // récupère l'ID utilisateur
      } catch (err) {
        console.error("Token invalide :", err);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook pour utiliser le contexte facilement
export function useAuth() {
  return useContext(AuthContext);
}
