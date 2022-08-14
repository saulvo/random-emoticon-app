import { IEmojiData } from 'emoji-picker-react';
import dynamic from 'next/dynamic';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import Input from './Input';
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

interface Props {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
}
const EmojiInput: React.FC<Props> = ({ value, onChange }) => {
  const refPicker = React.useRef<HTMLDivElement>(null);

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onEmojiClick = useCallback(
    (e: React.MouseEvent, emojiObject: IEmojiData) => {
      onChange((x: string[]) => x.concat(emojiObject.emoji));
    },
    [onChange],
  );

  const handleRemove = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const handleTogglePicker = useCallback(
    (e: any) => {
      if (refPicker && refPicker.current) {
        if (e.target && e.target.contains(refPicker.current)) {
          setIsFocus(false);
        }
      }
      return false;
    },
    [refPicker],
  );

  useEffect(() => {
    window.addEventListener('click', handleTogglePicker);
    return () => window.removeEventListener('click', handleTogglePicker);
  }, [handleTogglePicker]);

  return (
    <div className='relative'>
      <Input
        id='input'
        type='text'
        name='emoji'
        placeholder='Select emoji'
        required
        value={value.join('')}
        onFocus={() => setIsFocus(true)}
      />
      {value.length > 0 && (
        <button
          type='button'
          onClick={handleRemove}
          className='flex items-center justify-center w-5 h-5 absolute top-[11px] right-3 bg-red-600/80 text-white rounded-full text-xs'>
          x
        </button>
      )}
      {isFocus && (
        <div ref={refPicker} className='absolute top-full left-0 w-full'>
          <Picker
            pickerStyle={{
              width: '100%',
            }}
            native
            disableSearchBar
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiInput;
