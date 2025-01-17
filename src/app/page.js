import Image from "next/image";
import FereastraPrincipala from "./_componente/Main/FereastraPrincipala";
import Contact from "./_componente/Const/Contact";
import AuthUserPanel from "./_componente/Const/AuthUserPanel";
import FereastraDespreAI from "./_componente/DespreAI/FereastraDespreAI";
import FereastraDespreNoi from "./_componente/DespreNoi/FereastraDespreNoi";
import FereastraParteneri from "./_componente/Parteneri/FereastraParteneri";
import Trademark from "./_componente/Const/Trademark";
import FereastraDiagnostic from "./_componente/Diagnostic/FereastraDiagnostic";
import { getSession } from "./login/userManager";

export default async function Home() {

  const session = await getSession();

  return (
    <div>
      <AuthUserPanel />
      <FereastraDiagnostic
        id = "diagnostic"
        session = {session}
      />
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
