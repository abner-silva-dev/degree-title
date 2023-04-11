import Navegation from "./components/navegation/navegation.component";
import Managment from "./components/management/management";
import Search from "./components/search/search.component";
import RevelSection from "./components/revel-section/revel-section.component";

import "./App.css";

const App = () => {
  return (
    <RevelSection>
      <div className="section__interactive">
        <Navegation />
        <main className="main">
          <Search />
          <Managment />
        </main>
      </div>
    </RevelSection>
  );
};

export default App;
