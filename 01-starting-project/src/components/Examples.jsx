import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

  return (
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
  );
}
