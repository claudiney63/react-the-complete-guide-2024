import logoReact from "../../assets/react-core-concepts.png";
import "../Header/Header.css";

const description = ["Fundamental", "Core", "Crucial", "Essential"];

function randomDescription(max) {
  return Math.floor(Math.random() * max + 1);
}

export default function HeaderComponent() {
  const descriptionConst = description[randomDescription(3)];

  return (
    <header>
      <img src={logoReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionConst} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}