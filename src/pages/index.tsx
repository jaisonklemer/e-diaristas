import SafeEnvironment from "ui/components/feedback/SafeEnviroment//SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais na sua localidade"
        }
      />
      <UserInformation
        name={"Jaison Klemer"}
        picture={"https://www.github.com/jaisonklemer.png"}
        rating={4}
        description={"Gaspar"}
      />
    </div>
  );
}
