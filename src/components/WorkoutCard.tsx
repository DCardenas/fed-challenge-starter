import React from 'react';
import styles from '../styles/WorkoutCard.module.css';
import stopwatch from '../assets/svg/stopwatch';
import track from '../assets/svg/track';
import details from '../assets/svg/details';

interface Props {
  data: Data;
  isActive: boolean;
  toggleCard: () => void;
}

interface Data {
  title: string;
  image_name: string;
  time?: string;
  likes?: string;
  workouts?: number;
}

const WorkoutCard: React.FC<Props> = ({ data, isActive, toggleCard }) => {
  const { title, image_name, time, likes, workouts } = data;

  return (
    <div 
      className={styles.container} 
      style={{
        boxShadow: isActive ? 'var(--shadow-high)' : 'var(--shadow-low)'
      }}
      onClick={() => toggleCard()}
    >
      <div className={styles.thumb_container}>
        <img className={styles.thumb} src={require(`../assets/images/${image_name}-thumb.jpg`)} alt={`${image_name}-thumb`}/>
        {workouts && 
          <div className={styles.overlay}>
            <div className={styles.overlay_number}>{workouts}</div> 
            <div className={styles.overlay_center}>Workouts</div>
            <div>{details}</div>
          </div>
        }
      </div>
      <div className={styles.details_container}>
        <div className={styles.header}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.trainer}>
            <img src={require(`../assets/images/${image_name}-trainer.jpg`)} alt={`${image_name}-trainer`}/>  
          </div>
        </div>
        {time && likes && 
          <div className={styles.details}>
            <div>
              {stopwatch}
              {time}
            </div>
            <div>
              {track}
              {likes}
            </div>
          </div>
        }
        {isActive &&
          <div className={styles.link}>
            <a href="https://www.ifit.com">View Details</a>
          </div>
        }
      </div>
    </div>
  );
}

export default WorkoutCard