import { forwardRef } from "react";
import img from "@/assets/children-share.png";
import Typewriting from "@/components/TypeWriting";
import img2 from "@/assets/LittlestTokyo_img0.png";

const NewSon = (props: any) => {
  console.log("Newprops", props);
  return <div>Son</div>;
};

const Son = forwardRef((props, ref) => {
  return (
    <div>
      NewSon
      <NewSon ref={ref} {...props} />
      <Typewriting />
      <img src={img} alt="" />
      <img src={img2} alt="" />
    </div>
  );
});

export default Son;
