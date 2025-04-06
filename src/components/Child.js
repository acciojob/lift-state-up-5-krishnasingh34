// import React from 'react'

// const Child = ({isLoggedIn, setisLoggedIn}) => {
//   return (
//     <div className='child'>
//     <form onSubmit={(e)=> {
//         e.preventDefault()
//         setisLoggedIn(true)
//     }}>
//       <label>Username:</label>
//       <input type="text" /> 
//       <label>Password:</label>
//       <input type="password" />        
//       <button>Login</button>
//     </form>
//     {
//         isLoggedIn==true && <p>You are logged in!</p>
//     }
//     </div>
//   )
// }

// export default Child

import React from 'react'

const Child = ({ isLoggedIn, setisLoggedIn }) => {
  return (
    <div className='child'>
      {
        isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <form onSubmit={(e) => {
            e.preventDefault()
            setisLoggedIn(true)
          }}>
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <button>Login</button>
          </form>
        )
      }
    </div>
  )
}

export default Child
