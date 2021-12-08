import { useEffect } from "react";
import { UserResponse } from "../../api/users";
import ObjectList from "../../components/ObjectList/ObjectList";
import { AuthContextType, useAuth } from "../../providers/AuthProvider";
import { useServices } from "../../providers/ServiceProvider";

const User = () => {
  const {
    user: { senha, livros, ...other },
    setUser,
  } = useAuth() as AuthContextType & { user: UserResponse };
  const { users } = useServices();

  useEffect(() => {
    users.getUser(other.codigo).then((usr) => {
      setUser(usr);
    });
  }, [other.codigo, users, setUser]);

  return (
    <div style={{paddingTop: 40}}>
      <ObjectList
        obj={{ ...other, livros: livros?.map((livro) => livro.titulo) }}
      />
    </div>
  );
};

export default User;
