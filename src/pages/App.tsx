import React, { useState } from 'react';
import styles from '../styles/App.module.css';
import workouts from '../data/workouts';
import WorkoutCard from '../components/WorkoutCard';
import { animated, useTrail } from 'react-spring';

function App() {
  const [ activeCard, setActiveCard ] = useState<number>(-1);

  const toggleActiveCard = (i: number) => () => {
    if (activeCard === i) {
      setActiveCard(-1);
    } else {
      setActiveCard(i);
    }
  }

  const trail = useTrail(workouts.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    y: 0,
    height: 20,
    from: { opacity: 0, y: 20, height: 0 }
  });
  
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {trail.map(({ height, y, ...rest }, index) => (
          <animated.div
            key={`card-${index}`} 
            className={styles.text}
            style={{ ...rest, transform: y.interpolate(x => `translate3d(0, ${x}px, 0)`) }}
          >
            <WorkoutCard
              data={workouts[index]}
              isActive={activeCard === index}
              toggleCard={toggleActiveCard(index)}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
