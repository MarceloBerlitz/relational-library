import { UserResponse } from "../../api/users";
import ObjectList from "../../components/ObjectList/ObjectList";
import { useAuth } from "../../providers/AuthProvider";

const User = () => {
  const {
    user: { senha, livros, ...other },
  } = useAuth() as { user: UserResponse };
  return (
    <div>
      <ObjectList
        obj={{ ...other, livros: livros?.map((livro) => livro.titulo) }}
      />
    </div>
  );
};

export default User;
