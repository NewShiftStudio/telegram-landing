import React from 'react';

import cn from 'classnames';

import AudioMessage from 'components/AudioMessage';
import { MessageItem } from 'components/MessageItem/MessageItem';
import { SkeletonMessage } from 'components/UI/SkeletonMessage/SkeletonMessage';
import VideoMessage from 'components/VideoMessage';

import { AudioMessage as AudioMessageType, Message, VideoMessage as VideoMessageType } from 'types/Message';

import { useDarkMode } from 'hooks/useDarkMode';

import s from './MessagesList.module.scss';

import darkBg from 'assets/images/bg_dark.svg';
import lightBg from 'assets/images/bg_light.svg';

type Props = {
  messages: (Message | AudioMessageType | VideoMessageType)[];
  isLoading?: boolean;
};

export const MessagesList = ({ messages, isLoading }: Props) => {
  const { isDark } = useDarkMode();

  return (
    <div className={s.messagesList} style={{ backgroundImage: `url(${isDark ? darkBg.src : lightBg.src})` }}>
      <div className={s.background} />

      {isLoading && (
        <>
          <SkeletonMessage isDark={!!isDark} />
          <SkeletonMessage isDark={!!isDark} />
        </>
      )}

      {!isLoading &&
        messages.map(message => {
          if (message.type === 'video') {
            return (
              <div key={message.id} className={s.message}>
                <VideoMessage video={message.video} />
              </div>
            );
          }

          if (message.type === 'audio') {
            return (
              <div key={message.id} className={s.message}>
                <AudioMessage audio={message.audio} />
              </div>
            );
          }

          return (
            <div key={message.id} className={cn(s.message, { [s.outgoing]: message.isOutgoing })}>
              <MessageItem
                text={message.text}
                withTail={message.isOutgoing}
                video={message.video}
                image={message.image}
                isOutgoing={message.isOutgoing}
                date={message.createdAt}
                link={message.link}
              />
            </div>
          );
        })}
    </div>
  );
};
