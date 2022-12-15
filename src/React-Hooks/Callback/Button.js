import React  from 'react'

 function Button({ Handelclick,children}) {
    console.log(`rendering  btn ==== ${children}`)
  return (
    <div>
      <button onClick={ Handelclick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
// export default Button