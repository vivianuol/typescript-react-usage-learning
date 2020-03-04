import React, { useState, useRef } from "react";

interface Person {
    firstName: string;
    lastName: string;
    gender: string;
}

interface Props {
    text: string;
    bool?: boolean;
    num?: number;
    fn: (isStreamExist: boolean) => void;
    person?: Person;
    handleChange:  (event: React.ChangeEvent<HTMLInputElement>)=> void;
}

interface textNode {
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {

    const [text, setText] = useState<textNode>({text: "hello"});

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange}/>
    </div>
  );
};
