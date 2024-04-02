import HeaderComponent from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
