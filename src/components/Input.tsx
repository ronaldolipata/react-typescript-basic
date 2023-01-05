import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { value, handleChange } = props;

  // Can define inside the component or pass from props 'handleChange'
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input type='text' value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input;
