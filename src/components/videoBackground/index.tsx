import React from 'react';
import VideoBackgroundProps from './interface';
import styles from './styles.css';

const VideoBackground = (props: VideoBackgroundProps) => (
  (<div className={styles.container}>
    <video className={styles.heroVideo} src={props.videoPath} preload="true" autoPlay muted loop />
    <div className={styles.videoOverlay}>
      <div></div>
    </div>
  </div>)
)

export default VideoBackground
