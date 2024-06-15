// import { useContext } from "react";
// import { MyContext } from "../contextObj";

// const Todolist = () => {
//   const { finallist, setFinallist } = useContext(MyContext);
//   const { setNewItem } = useContext(MyContext);
//   const {  setIsEditingid } = useContext(MyContext);

//   const deleteTask = (i) => {
//     setFinallist(() => {
//       return finallist.filter((_, index) => i!== index);
//     });
//   };


//   // if (isEditingid) {
//   //   const editedone = finallist.find((i) => i == isEditingid);
//   //   // const updatedTodos = finallist.map((item, index) =>
//   //   //   finallist.indexOf(editedone) == index ? item == editedone : item == item
//   //   // );
//   //   const updatedTodos = finallist.map((item, idx) => {
//   //     if (idx === isEditingid) {
//   //       return editedone; // Update the item being edited
//   //     } else {
//   //       return item; // Return unchanged item for other indices
//   //     }
//   //   });
    
//   //   setFinallist(updatedTodos);
//   //   setIsEditingid(0);
//   //   setNewItem("");
//   //   return;
//   // }

//   // const editTask = (i) => {

   
//   //     setIsEditingid(i);
//   //     // const editedone = () => {
//   //     //   return finallist.find((item, index) => i == index);
//   //     // };
//   //     const editedone = finallist[i]
//   //     setNewItem(editedone);
     
//   //   }
//   const editTask = (index) => {
//     setIsEditingid(index); // Set the index of the item being edited
//     const editedItem = finallist[index]; // Get the item at the specified index
//     setNewItem(editedItem); // Set newItem to the content of the edited item
//   };
  
  
   
  

//   return (
//     <div className="max-w-md  mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       <div className="space-y-4">
//         {finallist?.map((item, i) => (
//           <div
//             key={item}
//             className="bg-white p-4 shadow-md rounded-md flex items-center justify-between"
//           >
//             <h2 className="text-lg font-semibold">{item}</h2>
//             <div>
//               <button
//                 onClick={() => editTask(i)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteTask(i)}
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todolist;

import  { useContext } from "react";
import { MyContext } from "../contextObj";
import Draggable from 'react-draggable';



const Todolist = () => {
  const { finallist, setFinallist, setIsEditingid, setNewItem } = useContext(
    MyContext
  );

  const deleteTask = (index) => {
    const updatedList = finallist.filter((item, idx) => idx !== index);
    setFinallist(updatedList);
  };

  const editTask = (index) => {
    setIsEditingid(index); // Set the index of the item being edited
    const editedItem = finallist[index]; // Get the item at the specified index
    setNewItem(editedItem.newItem); // Set newItem to the content of the edited item
  };

  return (
    <div className="max-w-md mx-auto mt-8 h-[27rem] bg-green-200 rounded-xl">
      <h1 className="text-2xl text-center font-bold mb-4 ">To-Do List</h1>
     
      <div className="space-y-4 ">
        {finallist.map((item, i) => (
           <Draggable axis="y" key={item.id} >
          <div
            key={item.id} 
            className="bg-white p-4 shadow-md rounded-md  flex items-center justify-between"
          >
            <h2 className="text-lg font-semibold">{item.newItem}</h2>
            <div>
              <button
                onClick={() => editTask(i)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(i)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
