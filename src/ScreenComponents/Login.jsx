import React from 'react'

export const Login = () => {

    let username = ""

    const onChangeHandler = (event)=>{

        username= event.target.value
        localStorage.setItem("username",username)
        console.log(username)
    }


    const onSubmitHandler = ()=>{
        event.preventDefault()
        window.location = "/report"
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
    <div className="mb-3">
      <label className="form-label">Username</label>
      <input onChange={onChangeHandler} type="text" className="form-control" />
      
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}
