function Form(){
    return(
        <>
        <form action="" className="h-max m-2 p-2 flex justify-center flex-col gap-3 w-1/2">
          <input 
            type="text" 
            placeholder="Title"
            className="border-2 rounded-2xl py-4 px-2"
          />
          <textarea 
            placeholder="Write here.."
            className="border-2 py-4 px-2 h-75 rounded-2xl"> 
          </textarea>

          <button className="border rounded w-max px-4 py-1 cursor-pointer hover:bg-green-500">Save</button>
        </form>
        </>
    )
}

export default Form;