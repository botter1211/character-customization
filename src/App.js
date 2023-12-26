import { useEffect, useState } from "react";
import "./App.css";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [mouths, setMouths] = useState(1);
  const [hair, setHair] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [eyebrows, setEyebrows] = useState(3);
  const [clothing1, setClothing1] = useState(2);
  const [clothing2, setClothing2] = useState(2);
  const [clothing3, setClothing3] = useState(1);
  const [hats, setHats] = useState(1);

  const randomize = () => {
    setEyes(Math.floor(Math.random() * total.eyes) + 1);
    setBody(Math.floor(Math.random() * total.body) + 1);
    setMouths(Math.floor(Math.random() * total.mouth) + 1);
    setEyebrows(Math.floor(Math.random() * total.eyebrows) + 1);
    setHair(Math.floor(Math.random() * total.hair) + 1);
    setGlasses(Math.floor(Math.random() * total.glasses) + 1);
    setHats(Math.floor(Math.random() * total.hat) + 1);
    setClothing1(Math.floor(Math.random() * total.clothing1) + 1);
    setClothing2(Math.floor(Math.random() * total.clothing2) + 1);
    setClothing3(Math.floor(Math.random() * total.clothing3) + 1);
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subTitle">💇 CUSTOMIZATION 💇</div>
      <div class="divine"></div>
      <div className="container">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              eyebrows={eyebrows}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouths={mouths}
              hair={hair}
              hats={hats}
              glasses={glasses}
            />
            <div style={{ textAlign: "center" }}>
              <button className="button" onClick={() => randomize()}>
                RANDOMIZE
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="partList">
            <h2>Body</h2>
            <PartList
              total={total.body}
              path="body"
              selected={body}
              set={setBody}
            />
          </div>
          <div className="partList">
            <h2>Hair</h2>
            <PartList
              total={total.hair}
              path="hair"
              selected={hair}
              set={setHair}
            />
          </div>
          <div className="partList">
            <h2>Hats</h2>
            <PartList
              total={total.hat}
              path="accessories/hats"
              selected={hats}
              set={setHats}
            />
          </div>
          <div className="partList">
            <h2>Glasses</h2>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              selected={glasses}
              set={setGlasses}
            />
          </div>
          <div className="partList">
            <h2>Eyes</h2>
            <PartList
              total={total.eyes}
              path="eyes"
              selected={eyes}
              set={setEyes}
            />
          </div>
          <div className="partList">
            <h2>Eyebrows</h2>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              selected={eyebrows}
              set={setEyebrows}
            />
          </div>
          <div className="partList">
            <h2>Mouths</h2>
            <PartList
              total={total.mouth}
              path="mouths"
              selected={mouths}
              set={setMouths}
            />
          </div>
          <div className="partList">
            <h2>Clothes 1</h2>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              selected={clothing1}
              set={setClothing1}
            />
          </div>
          <div className="partList">
            <h2>Clothes 2</h2>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              selected={clothing2}
              set={setClothing2}
            />
          </div>
          <div className="partList">
            <h2>Clothes 3</h2>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              selected={clothing3}
              set={setClothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
