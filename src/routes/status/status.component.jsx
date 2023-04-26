import { useAuth } from "../../context/authContext";

const Status = () => {
  const { loading } = useAuth();

  if (loading) return <h1 className="text-3xl text-white">Cargando...</h1>;

  return <></>;
};

export default Status;
