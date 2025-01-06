import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import Card from "./components/Card";

// const App = () => {
//   const [username, setUsername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername("");
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           className="px-4 py-3 m-5 text-2xl text-black rounded"
//           placeholder="Enter name"
//           type="text"
//         />
//         <button className="px-4 py-3 m-5 text-2xl rounded">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <Card></Card>
    </>
  );
};

export default App;


