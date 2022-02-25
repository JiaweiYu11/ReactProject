
function App(props) {
  return (
    <div className="App">
      {props.navbar}
      {props.personalInfo}
      {props.postArea}
      <div class="container">
        <div class="row">
          {props.java}{props.python}{props.react}{props.sql}
        </div>
      </div>
    </div>
  );

}


export default App;
