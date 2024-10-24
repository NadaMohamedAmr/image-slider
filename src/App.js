/* eslint-disable jsx-a11y/alt-text */

import { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { arr } from './image';

function App() {
  const [m, setm] = useState(0)
  
  useEffect(() =>{
  setm(n.current.scrollWidth - n.current.offsetWidth)
  },[])

  const n = useRef()

  return (
<div className='app'>
<motion.div  ref={n} className='Container'>
<motion.div drag="x" dragConstraints= {{right:0, left:-m}} className='inner'>
{arr.map((e) =>
(
  <motion.div className='image'>
  <img src={e}/> 
  </motion.div>
)
)}
</motion.div>
</motion.div>
</div>
  );
}

export default App;
