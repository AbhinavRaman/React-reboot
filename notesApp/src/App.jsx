import NavBar from "./common/navbar";
import Form from "./Feature/Form";

function App(){
  return(
    <>
    <div className="bg-yellow-500 h-screen p-5">
      <NavBar />

      <div className="m-4 flex justify-around">
        <Form />
        <img src="https://www.svgrepo.com/show/417500/notes.svg" alt="notes" className="h-96" />
      </div>
    </div>
    </>
  )
}

export default App;