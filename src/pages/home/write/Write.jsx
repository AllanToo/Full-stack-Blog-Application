import "./write.css"

export default function Write() {
  return (
    <div className="wirte">
        <img className="writeImg" src="https://images.unsplash.com/photo-1528916451049-e5d097b61db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  alt=""/>
        <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title here" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story....." type="text" className="writeInput writeText">

            </textarea>
            <button className="writeSubmit">Publish</button>
        </div>
        </form>
        </div>
  )
}