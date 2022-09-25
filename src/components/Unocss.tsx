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

          /* span {
            height: 200px;
            background-color: green;
            display: block;
          } */

          .test:has(> p:hover) {
            background-color: black;
          }

          .test ~ span {
            background-color: pink;
          }
        `}
      >
        <div>123</div>
        <div className="test">
          <span>
            <p>pppppp</p>
          </span>
        </div>
        <div>div</div>
        <span>123123span</span>
        <span>123123span</span>
        <span>123123span</span>
        <span>123123span</span>
      </div>
      <span>ttt</span>
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
