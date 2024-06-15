
// import  {  useContext } from "react";
// import { MyContext } from "../contextObj";

// const Additem = () => {
//   const {finallist, setFinallist } = useContext(MyContext);
//   const {newItem, setNewItem} = useContext(MyContext);
//   const {iseditingid,setIsEditingid} = useContext(MyContext)
//   const {id,setId}=useContext(MyContext)
//   const updateList = (e) => {
//     setNewItem(e.target.value);
//   };

//   // const addToList = () => {
//   //   if (!iseditingid) {
//   //   if (newItem.trim() !== "") { // Ensure newItem is not empty
//   //     setFinallist([...finallist, newItem]);
//   //     setNewItem("");
//   //   }}
//   //   else{
//   //   // const editedone = finallist.find((i) => i == iseditingid);
//   //   // const updatedTodos = finallist.map((item, index) =>
//   //   //   finallist.indexOf(editedone) == index ? item == editedone : item == item
//   //   // );
//   //   const updatedTodos = finallist.map((item, idx) => {
//   //     if (idx === iseditingid) {
//   //       return newItem ; // Update the item being edited
//   //     } 
//   //       return item; // Return unchanged item for other indices
      
//   //   });
    
//   //   setFinallist(updatedTodos);
//   //   setIsEditingid(null);
//   //   setNewItem("");
   
  
//   //   }
//   // };
  
//   const addToList = () => {
//     if (iseditingid !== null && newItem.trim() !== "") {
//       // Editing an existing item
//       const updatedTodos = finallist.map((item, idx) =>
//         idx === iseditingid ? newItem : item
//       );
  
//       setFinallist(updatedTodos);
//       setIsEditingid(null); // Reset editing state
//       setNewItem(""); // Clear newItem after editing
//     } else if (newItem.trim() !== "") {
//       // Adding a new item
//       // setFinallist([...finallist, {newItem:newItem,id:Date.now().toString()}]);
//       setFinallist([...finallist,{ id: id, newItem: newItem }]);
//       setNewItem(""); // Clear newItem after adding
//     }
//   };
  
  
  
  
  
  
//   // const addToList = () => {
//   //   if (!iseditingid) {
//   //     // Adding a new item
//   //     if (newItem.trim() !== "") { // Ensure newItem is not empty
//   //       setFinallist([...finallist, newItem]);
//   //       setNewItem("");
//   //     }
//   //   } else {
//   //     // Editing an existing item
//   //     const updatedTodos = finallist.map((item, idx) => {
//   //       if (idx === iseditingid) {
//   //         return newItem; // Update the item at the edited index
//   //       }
//   //       return item; // Return unchanged item for other indices
//   //     });

//   //     setFinallist(updatedTodos);
//   //     setIsEditingid(null); // Reset editing state
//   //     setNewItem(""); // Clear newItem state
//   //   }
//   // };


//   return (
//     <div className="flex h-[30vh]  items-center justify-center ">
//       <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
//         <div className="flex items-center">
//           <input
//             onChange={updateList}
//             value={newItem}
//             className="border border-gray-300 rounded-md px-4 py-2 mr-4"
//             type="text"
//             placeholder="Enter item"
//           />
//           <button
//             onClick={addToList}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md"
//           >
//            { iseditingid ? "Update": "Add Item"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Additem;

import  { useContext } from 'react';
import { MyContext } from '../contextObj';

const Additem = () => {
  const { finallist, setFinallist, newItem, setNewItem, iseditingid, setIsEditingid } = useContext(MyContext);

  const updateList = (e) => {
    setNewItem(e.target.value);
  };

  const addToList = () => {
    if (iseditingid !== null && newItem.trim() !== "") {
      const updatedTodos = finallist.map((item, idx) =>
        idx === iseditingid ? { ...item, newItem: newItem } : item
      );

      setFinallist(updatedTodos);
      setIsEditingid(null); 
      setNewItem(""); 
    } else if (newItem.trim() !== "") {
    
      setFinallist([...finallist,{ id: Date.now().toString(), 
        newItem: newItem.trim()}]);
      setNewItem(""); 
    }
  };

  return (
    <div className="flex h-[30vh] items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
        <div className="flex items-center">
          <input
            onChange={updateList}
            value={newItem}
            className="border border-gray-300 rounded-md px-4 py-2 mr-4"
            type="text"
            placeholder="Enter item"
          />
          <button
            onClick={addToList}
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            {iseditingid !== null ? "Update" : "Add Item"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Additem;
