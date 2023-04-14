import Header from "./Components/Header";
import InputField from "./Components/InputField";
import PartOfSpeech from "./Components/Main/PartOfSpeech";
import Source from "./Components/Main/Source";
import Word from "./Components/Main/Word";

function App() {
  return (
    <>
      <div className="min-h-[100vh] p-6 lg:max-w-4xl lg:mx-auto lg:pt-10">
        <Header />
        <main>
          <InputField />
          <Word />
          <PartOfSpeech />
        </main>
        <Source />
      </div>
    </>
  );
}

export default App;
