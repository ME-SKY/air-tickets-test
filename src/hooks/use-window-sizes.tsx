import { useState, useEffect } from "react";

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const useWindowSizes = () => { 

  const [windowSizes, setWindowSizes] = useState(getWindowSize);

  useEffect(() => {
    
    function handleWindowResize() {
      setWindowSizes(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  
  return {...windowSizes};
};

export default useWindowSizes;