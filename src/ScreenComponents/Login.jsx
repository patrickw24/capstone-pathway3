import React from 'react'

export const Login = () => {

    let username = ""

    const onChangeHandler = (event)=>{

        username= event.target.value
        console.log(username)
    }


    const onClickHandler = ()=>{

        window.location = "/report"
    }

  return (
    <div>
        <form>
    <div className="mb-3">
      <label className="form-label">Username</label>
      <input onChange={onChangeHandler} type="text" className="form-control" />
      <div  className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}
