import React, { Dispatch, SetStateAction, useCallback } from 'react';
import Button from './Button';
import EmojiInput from './EmojiInput';
import Input from './Input';

interface Props {
  setResult: Dispatch<SetStateAction<string[]>>;
}
const Form: React.FC<Props> = ({ setResult }) => {
  const [emojis, setEmojis] = React.useState<string[]>([]);
  const [quantity, setQuantity] = React.useState<number>(10);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (emojis.length === 0 || quantity === 0) return;

      setResult(() => {
        const array = new Array(quantity);
        return [...array].map((x) => emojis[Math.floor(Math.random() * emojis.length)]);
      });
    },
    [emojis, quantity, setResult],
  );
  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <EmojiInput value={emojis} onChange={setEmojis} />
      <Input
        type='number'
        name='quantity'
        placeholder='Enter quantity'
        required
        value={quantity}
        onChange={(e) => setQuantity(Number.parseInt(e.currentTarget.value))}
      />
      <Button type='submit'>Generate</Button>
    </form>
  );
};

export default Form;
