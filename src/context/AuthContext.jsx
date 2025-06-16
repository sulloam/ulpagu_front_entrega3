import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const tokenGuardado = localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('usuario');

    if (tokenGuardado) {
        setToken(tokenGuardado);
        try {
            if (usuarioGuardado) {
                setUsuario(JSON.parse(usuarioGuardado));
            }
        } catch (e) {
            console.error('❌ Error al parsear usuario guardado:', e);
            setUsuario(null);
        }
    }
  }, []);

  const login = (tokenRecibido, datosUsuario) => {
    localStorage.setItem('token', tokenRecibido);
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));
    setToken(tokenRecibido);
    setUsuario(datosUsuario);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setToken(null);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ token, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);