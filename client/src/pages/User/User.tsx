import ObjectList from "../../components/ObjectList/ObjectList";
import { useAuth } from "../../providers/AuthProvider";

const User = () => {
  const { user } = useAuth();
  return (
    <div>
      <ObjectList obj={user} />
    </div>
  );
};

export default User;
