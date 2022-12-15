import React from 'react'

 function Titel() {
  console.log("rendering-Title")
  return (
    <div>
      Title
    </div>
  )
}
export default React.memo (Titel)