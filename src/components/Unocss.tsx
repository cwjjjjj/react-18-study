import { css } from "@emotion/react";

export default function Unocss() {
  return (
    <div hover="color-blue" className=" text-4xl color-red">
      Unocss123123
      <div
        css={css`
          background-color: red;
          height: 200px;
          width: 100px;
          position: absolute;
        `}
      >
        1
      </div>
      <div
        css={css`
          background-color: orange;
          height: 200px;
          width: 100px;
          display: flex;
          /* position: relative; */
          z-index: 10;
        `}
      >
        2
      </div>
    </div>
  );
}
