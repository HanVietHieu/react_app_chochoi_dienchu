import React, { useEffect, useState } from 'react';

const Timer = () => {
    
    const [count, setCount] = useState(100);
    
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count - 1);
        
      }, 1000);
      if(count == 0){
        alert('hết thời gian làm bài')
      }
    },[count]);
    
    
  
    return <span>{count} times!</span>;
}

export default Timer;
