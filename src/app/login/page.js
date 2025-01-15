import AuthUserPanel from "../_componente/Const/AuthUserPanel";
import Contact from "../_componente/Const/Contact";
import Trademark from "../_componente/Const/Trademark";
import FereastraPrincipala from "./_componente/FereastraPrincipala";

export default function Home() {
  return (
    <div>
        <FereastraPrincipala />
        <Contact />
        <AuthUserPanel />
        <Trademark />
    </div>
  );
}
