import { forwardRef } from "react";

const NewSon = (props: any) => {
  console.log("Newprops", props);
  return <div>Son</div>;
};

const Son = forwardRef((props, ref) => {
  console.log("SonProps", props, ref);
  return (
    <div>
      NewSon
      <NewSon ref={ref} {...props} />
    </div>
  );
});

export default Son;
