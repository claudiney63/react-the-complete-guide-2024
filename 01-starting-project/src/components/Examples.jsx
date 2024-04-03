import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { useState } from "react";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

  return (
    <Section title={"Examples"} id="examples">
      <Tabs
      ButtonsContainer={'menu'}
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
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
          {!selectedTab && <p>Please select a topic!</p>}
        </div>
      </Tabs>
    </Section>
  );
}
