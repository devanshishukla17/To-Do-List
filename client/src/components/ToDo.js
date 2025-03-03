// import React from 'react';
// import './ToDo.css'; 

// export default function ToDo()
// {
//     return 
//     (
//         <div className="todo-container">
//           {/* Your To-Do component content goes here */}
//           <h1>Welcome to the Task Manager</h1>
//           <p>Manage your tasks efficiently!</p>
//         </div>
//     );
// }

import React from 'react';

const ToDo = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + './assets/bg.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to the Task Manager</h1>
      <p>Manage your tasks efficiently!</p>
    </div>
  );
};

export default ToDo;

