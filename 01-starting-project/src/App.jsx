import { CORE_CONCEPTS } from "./data.js";
import HeaderComponent from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

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
