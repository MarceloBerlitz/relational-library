
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

interface userContextInterface {
  user: typeof initialUser,
  login: (name: string) => void,
  logout: () => void
}

interface Book {
  codigo: number,
  titulo: string,
  descricao: string,
  ano: number,
  autores: Array<string>
}

interface booksContextInterface {
  books: Array<Book>
}

const initialUser = {
  nome: '',
  email: '',
  tipo: '',
  senha: '',
  logado: false
}

const initialBooks =
  [
    {
      codigo: 0,
      titulo: "",
      descricao: "",
      ano: 0,
      autores: [""]
    }
  ]


export const AuthContext = createContext<userContextInterface>(
  {
    user: initialUser,
    login: name => name,
    logout: () => { }
  }
);

export const BookContext = createContext<booksContextInterface>(
  {
    books: initialBooks
  }
);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<typeof initialUser>(initialUser);
  const [books, setBooks] = useState<typeof initialBooks>(initialBooks);

  const getBooks = async () => {
    const resp = await fetch(`http://localhost:8080/livros`);
    try {
      if (resp.ok) {
        const books = (await resp.json());
        setBooks(books)
      }
      else {
        setBooks(books)
      }
    }
    catch (e) {
      setBooks(initialBooks)
    }
  }

  const getUser = async (name: string, setByName: Function, showStatus: boolean) => {
    const resp = await fetch(`http://localhost:8080/usuarios/1`);
    if (showStatus) handleStatus(resp.status | 0)
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

  const login = (name: string) => {
    getUser(name, setUser, true)
  }

  const logout = () => {
    setUser(initialUser)
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

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
