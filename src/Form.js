import React from 'react'

export default function Form() {
    const initiateValue={firstname:"",lastname:"",age:"",email:"",password:""}
    const[formValues,setFormvalues]=React.useState(initiateValue)
    const[formErrors,setFormerrors]=React.useState({})
    const[submit,isSubmit]=React.useState(false)

    const HandelForm=(e)=>{
    const{name,value}=e.target
    setFormvalues({...formValues,[name]:value})
    }
    
const Handelsubmit=(e)=>{
    e.preventDefault();
    setFormerrors(validate(formValues))
    isSubmit(true)
}

    const validate=(value)=>{
      let errors={}
      console.log(value)
      if(value.firstname.length<3){
         errors.firstname="too-short"
      }
      if(value.lastname.length<3){
        errors.lastname="too-short"
      }
      if(value.age!==Number){
        errors.age="please enter valid number"
      }
      if(value.password.length<6){
        errors.password="Password is to short"
      }
      if(!value.email.length<6){
        errors.email="Email format is not Valid"
      }
      return errors
    }
    console.log("formerrors",formErrors)
console.log(formValues)

const HandelClick=(e)=>{
   isSubmit(false)
}
    return (
        <div className='form'>
            <form onSubmit={Handelsubmit}>
                <div className='sub-form'>
                    <input type="text" placeholder='First-Name' onChange={HandelForm} name="firstname" value={formValues.firstname}></input>
                </div>
                <p className='errors'>{formErrors.firstname}</p>
                <div className='sub-form'>
                    <input type="text" placeholder='last_name'  onChange={HandelForm} name="lastname" value={formValues.lastname}></input>
                </div>
                <p className='errors'>{formErrors.lastname}</p>
                <div className='sub-form'>
                    <input type="text" placeholder='age'  onChange={HandelForm} name="age" value={formValues.age}></input>
            </div>
            <p className='errors'>{formErrors.age}</p>
                <div className='sub-form'>
                    <input type="text" placeholder='email'  onChange={HandelForm} name="password" value={formValues.email}></input>
            </div>
            <p className='errors'>{formErrors.email}</p>
                <div className='sub-form'>
                    <input type="password" placeholder='password'  onChange={HandelForm} name="password" value={formValues.password}></input>
            </div>
            <p className='errors'>{formErrors.password}</p>
            <button onClick={HandelClick}>Submit</button>
            </form>
        </div>
    )
}
