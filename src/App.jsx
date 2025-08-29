import "./App.css";
import PrimaryButton from "./component/PrimaryButton";
import SecondaryButton from "./component/SecondaryButton";

const App = () => {
  return (
    <>
    <div>
      <h2>Hello SDC</h2>
      <br/>
      <label>Primary Button</label>
      <PrimaryButton />
      <br/>
      <label>Secondary Button</label>
      <SecondaryButton />
    </div>

    <div className="text">
      HELLO WORLD
    </div>
    </>
  );
};

export default App;
