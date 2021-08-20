import '../scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="formContainer">
        <div className="container">
          <h1>Music Predictor</h1>
          <form>
            <label for="age">What is your age?</label><br /><br />
            <input type="number" min="10" max="130" name="age" placeholder="number" />

            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
