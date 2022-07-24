import React, { useEffect, useState } from "react";

const styles= {
    width: '10%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
}


const Timer = ({ sec }) => {
  const [second, setSecond] = useState(sec);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(second - 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return <div style={styles}>0:0{second}</div>;
};

export default Timer;
