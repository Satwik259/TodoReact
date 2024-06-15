// /* eslint-disable react/prop-types */
// // MyContext.js
// import  { createContext, useState } from 'react';

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [id,setId] = useState("")
//   const [newItem,setNewItem]= useState([]);

//   const [finallist, setFinallist] = useState({
//     id : id,
//     newItem : newItem
//   });
//   const [iseditingid,setIsEditingid]=useState(0)
//   return (
//     <MyContext.Provider value={{ finallist, setFinallist,newItem,setNewItem,iseditingid,setIsEditingid}}>
//       {children}
//     </MyContext.Provider>
//   );
// };
/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [finallist, setFinallist] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [iseditingid, setIsEditingid] = useState(null);
  const [id, setId] = useState('');

  return (
    <MyContext.Provider value={{ finallist, setFinallist, newItem, setNewItem, iseditingid, setIsEditingid, id, setId }}>
      {children}
    </MyContext.Provider>
  );
};
