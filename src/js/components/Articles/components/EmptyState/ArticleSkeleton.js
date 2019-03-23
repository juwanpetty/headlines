import React from 'react';

import styles from './ArticleSkeleton.scss';

const ArticleSkeleton = () => (
  <li className={styles.Skeleton}>
    <div className={styles.ImageWrapper}>
      <div className={styles.Image} />
    </div>

    <div>
      <div className={styles.Source}>
        <div className={styles.SkeletonLine} />
      </div>
      <div className={styles.Overflow}>
        <div className={styles.SkeletonTitle} />
        <div className={styles.SkeletonLine} />
        <div className={styles.SkeletonLine} />
      </div>
      <div className={styles.Footer}>
        <div className={styles.SkeletonLine} />
      </div>
    </div>
  </li>
);

export default ArticleSkeleton;
