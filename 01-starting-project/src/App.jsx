import logoReact from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const description = ["Fundamental", "Core", "Crucial", "Essential"];

function randomDescription(max) {
  return Math.floor(Math.random() * max + 1);
}

function HeaderComponent() {
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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => {
              return (
                <CoreConcepts
                  key={index}
                  image={concept.image}
                  title={concept.title}
                  description={concept.description}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
