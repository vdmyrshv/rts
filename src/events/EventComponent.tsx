const EventComponent: React.FC = () => {
  // CTRL/CMD click on the React.Event type brings you to a list of the diff types of events
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };

  // ALTERNATIVELY event argument can be annotated
  // const handleChange = (event: : React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // };

  const handleDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log("im being dragged");
  };
  
  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log("drag ended");
  };

  // react type inference only can infer the event object if it is in line in the onChange handler in the tsx
  // if the handleChange function is defined ahead of time, type annotation must be used
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        Drag Me!
      </div>
    </div>
  );
};
export default EventComponent;
