import Image from "next/image";
import FereastraPrincipala from "./_componente/Main/FereastraPrincipala";
import Contact from "./_componente/Const/Contact";
import AuthUserPanel from "./_componente/Const/AuthUserPanel";
import FereastraDespreAI from "./_componente/DespreAI/FereastraDespreAI";
import FereastraDespreNoi from "./_componente/DespreNoi/FereastraDespreNoi";
import FereastraParteneri from "./_componente/Parteneri/FereastraParteneri";
import Trademark from "./_componente/Const/Trademark";

export default function Home() {
  return (
    <div>
      <AuthUserPanel />
      <FereastraPrincipala 
        id = "main"
      />
      <FereastraDespreAI 
        id = "despreai"
      />
      <FereastraDespreNoi
        id = "desprenoi"
      />
      <FereastraParteneri
        id = "parteneri"
      />
      <Contact />
      <Trademark />
    </div>
  );
}
