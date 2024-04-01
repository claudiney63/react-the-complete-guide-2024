import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import HeaderComponent from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  const [selectedTab, setSelectedTab] = useState('components');

  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <p>{selectedTab}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
