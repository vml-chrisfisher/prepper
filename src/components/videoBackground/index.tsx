import React from 'react';
import * as baseStyles from '../base.module.css';
import VideoBackgroundProps from './interface';
import * as styles from './styles.module.css';

const VideoBackground = (props: VideoBackgroundProps) => (
  (<div className={styles.container}>
    <video className={styles.heroVideo} src={props.videoPath} preload="true" autoPlay muted loop />
    <div className={styles.videoOverlay}>
      <div></div>
    </div>
  </div>)
)

export default VideoBackground
