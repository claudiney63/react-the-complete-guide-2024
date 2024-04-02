import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import HeaderComponent from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

  return (
    <>
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
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {selectedTab && (
              <>
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
              </>
            )}
            <p>Please select a topic!</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
