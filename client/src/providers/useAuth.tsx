
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

const initialUser = {
  nome:'',
  email:'',
  tipo:'',
  senha:'',
  isLogged: false
}

interface userContextInterface {
  user: typeof initialUser,
  getAnotherUser: (name:string) =>void,
  login: (name: string) => void,
  logout: () => void
}

export const AuthContext = createContext<userContextInterface>(
  {
    user: initialUser,
    getAnotherUser: name => name,
    login: name => name,
    logout: () => { }
  }
);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<typeof initialUser>(initialUser);
  const [anotherUser, setAnotherUer] = useState<typeof initialUser>(initialUser);

  const getUser = async (name: string, setByName: Function, showStatus: boolean) => {
    const resp = await fetch(`http://localhost:8080/usuarios/1`);
    if(showStatus) handleStatus(resp.status | 0)
    try {
      if (resp.ok) {
        const user = (await resp.json());
        setByName(user)
      }
      else {
        setByName(user)
      }
    }
    catch (e) {
      setByName(initialUser)
    }
  }

  const login = (name:string) =>{
    getUser(name,setUser,true)
  }

  const logout = () => {
    setUser(initialUser)
  }

  const getAnotherUser = (name:string) => {
    getUser(name,setAnotherUer,false)
  }

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser(initialUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, getAnotherUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const handleStatus = (status: number) => {
  if (status === 200) {
    toast.success(`Usuário logado`, {
      position: "top-center",
      autoClose: 1500,
    })
  }
  if (status === 404) {
    toast.error('Usuário não encontrado', {
      autoClose: 3000,
    })
  }
  if (status === 403) {
    toast.error('Limite de tentativas excedido', {
      autoClose: 3000,
    })
  }
  if (status === 0) {
    toast.error('Ocorreu um problema na rede', {
      autoClose: 3000,
    })
  }
}

export const useAuth = () => useContext(AuthContext);