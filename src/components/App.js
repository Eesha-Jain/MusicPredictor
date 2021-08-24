import '../scss/App.scss';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState();
  const [formDisplay1, setFormDisplay1] = useState("block");
  const [formDisplay2, setFormDisplay2] = useState("none");
  const [formDisplay3, setFormDisplay3] = useState("none");
  const [message, setMessage] = useState("");
  const [genre, setGenre] = useState("Loading...");
  const [newGenre, setNewGenre] = useState("");
  let justGenre = "";

  const submit = e => {
    e.preventDefault();
    setFormDisplay1("none");
    setFormDisplay2("block");

    fetch('http://localhost:9000/python?age=' + age).then(req => req.json()).then(res => {
      justGenre = res.data;

      setGenre(
        <div>
          <p style={{fontSize: 16}}>Is your favorite genre {res.data}?</p>
          <div className="surrounding">
            <button className="fancy" onClick={yes}>Yes</button>
            <button className="fancy" onClick={no}>No</button>
          </div>
        </div>
      );
    });
  }

  const addValue = (e) => {
    e.preventDefault();
    setFormDisplay3("none");
    setMessage("Thanks for making our modeling better for you and future users!");
    fetch('http://localhost:9000/addValue?age=' + age + "&genre=" + newGenre);
  }

  const yes = () => {
    setFormDisplay2("none");
    setFormDisplay3("none");
    setMessage("Thanks for letting us know that our predictions were correct!");
    fetch('http://localhost:9000/addValue?age=' + age + "&genre=" + justGenre);
  }

  const no = () => {
    setFormDisplay2("none");
    setFormDisplay3("block");
    setMessage("Sorry to hear that. Please let us know your real favorite genre so we can fix that:");
  }
  
  return (
    <div className="App">
      <div className="formContainer">
        <div className="container">
          <h1>Music Predictor</h1>
          <div>
            <form id="form" onSubmit={submit} style={{display: formDisplay1}}>
              <label>What is your age?</label><br /><br />
              <input id="age" type="number" min="10" max="130" name="age" value={age} onChange={(e) => {setAge(e.target.value)}} required/>
              <br />
              <button type="submit">Submit</button>
            </form>

            <div style={{display: formDisplay2}}>
              {genre}
            </div>

            <div>
              <p>{message}</p>
              <form onSubmit={addValue} style={{display: formDisplay3}}>
                <input type="text" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} required/>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;