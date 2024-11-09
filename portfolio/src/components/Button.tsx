// src/components/Button.tsx
// "use client";


import React from 'react';


interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
/*
breakdown:
- ButtonProps: typescript interface for Button component props
Button, a const variable which is essentially a functional component
 with the type React.FC which takes in ButtonProps interface as a generic type
 we set this equal to a function that takes  in a javascript object 
 with properties label and onClick
 -This is the same as passing in a `props` variable and just destructuring it

 example:
 const Button: React.FC<ButtonProps> = (props) => {
 }
 and then when we want to access properties we do props.label, props.onClick
 or we can just do:
 {label, onClick} = props
*/