import { useControls } from "leva";
import { mockUsers } from "@/Mock";
import { css } from "@emotion/react";
export default function Leva() {
  // const { mockUsers1 } = useControls({ mockUsers1: mockUsers });
  const { name, aNumber, img, color } = useControls({
    name: "World",
    aNumber: 0,
    img: "https://github.githubassets.com/images/icons/emoji/unicode/26a1.png",
    color: "red",
  });
  return (
    <div>
      {/* {mockUsers1.map((user) => (
        <div>{user.id}</div>
      ))} */}
      {name}
      <div
        css={css`
          color: ${color};
        `}
        style={{
          color: color,
        }}
      >
        {aNumber}
      </div>
      <img src={img} alt="" />
    </div>
  );
}
