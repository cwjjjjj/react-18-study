import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

export default function TwoPageCss() {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(["test1"]);
  queryClient.prefetchQuery(["test2"]);
  queryClient.prefetchQuery(["test3"]);

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
