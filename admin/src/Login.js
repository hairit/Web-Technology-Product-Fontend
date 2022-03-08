import React from 'react'

export default function Login({loginWithGoogle}) {
  return (
    <div>
       <button onClick={()=>loginWithGoogle()}>LoginWithGoogle</button>
    </div>
  )
}
