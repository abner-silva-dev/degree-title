import RevelSection from "./../../components/revel-section/revel-section.component";
import Navegation from "./../../components/navegation/navegation.component";
import { useAuth } from "../../context/authContext";
import { useSelector } from "react-redux";

import "./home.style.css";
import { Outlet } from "react-router-dom";

export function Home() {
  const { loading } = useAuth();
  const { active } = useSelector((state) => state.navegation);

  if (loading) return <h1 className="text-3xl text-white">Cargando...</h1>;

  return (
    <RevelSection>
      <div className="section__interactive">
        <Navegation />

        <main className="main main--active">
          <Outlet />
        </main>
      </div>
    </RevelSection>
  );
}
