interface ChildProps {
  color: string;
  onClick: () => void;
}

// interface is declared in the child component and will then throw errors in the parent
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    <button onClick={onClick} > Click Me</button>
    {color}</div>;
};

// another way of defining a function component
// this is using generics
// THIS IS THE BETTER APPROACH
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>{children}</div>;
};
