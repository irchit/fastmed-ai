import Image from "next/image";
import FereastraPrincipala from "./_componente/Main/FereastraPrincipala";
import Contact from "./_componente/Const/Contact";
import AuthUserPanel from "./_componente/Const/AuthUserPanel";

export default function Home() {
  return (
    <div>
      <AuthUserPanel />
      <FereastraPrincipala />
      <Contact />
    </div>
  );
}
