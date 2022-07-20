import { css } from "@emotion/react";

export default function TwoPageCss() {
  return (
    <main
      css={css`
      .wrapper{
        height: 200vh;
        background-color: pink;
      }

      .top{
        position:sticky;
        top:0;
        height: 100vh;
        background-color: orange;
        /* z-index: 1; */
      }

      .bottom{
        position:relative;
        margin-top:-100vh;
        height: 100vh;
        background-color: yellow;
    `}
    >
      <div className="wrapper">
        /* wrapper1 */
        <section className="top">top</section>
      </div>
      <section className="bottom">bottom</section>
      wrapper2
    </main>
  );
}
