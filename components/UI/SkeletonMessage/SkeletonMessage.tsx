import React from 'react';
import Skeleton from 'react-loading-skeleton';

import s from './SkeletonMessage.module.scss';

type Props = {
  isDark?: boolean;
};

export const SkeletonMessage = ({ isDark }: Props) => (
  <div className={s.skeletonGroup}>
    <Skeleton
      className={s.skeletonImage}
      borderRadius={0}
      height={240}
      baseColor={isDark ? '#1c1c1c' : undefined}
      highlightColor={isDark ? '#424242' : undefined}
    />
    <div className={s.skeletonText}>
      <Skeleton
        borderRadius={0}
        className={s.skeletonTitle}
        count={1}
        baseColor={isDark ? '#1c1c1c' : undefined}
        highlightColor={isDark ? '#424242' : undefined}
      />
      <Skeleton
        borderRadius={0}
        height={16}
        baseColor={isDark ? '#1c1c1c' : undefined}
        highlightColor={isDark ? '#424242' : undefined}
      />
      <Skeleton
        borderRadius={0}
        height={32}
        baseColor={isDark ? '#1c1c1c' : undefined}
        highlightColor={isDark ? '#424242' : undefined}
      />
    </div>
  </div>
);
