import { css } from "@emotion/react";

export default function MediaQuery() {
  return (
    <div
      css={css`
        color: blue;

        @media screen and (min-width: 900px) {
          color: red;
        }
      `}
    >
      MediaQuery
    </div>
  );
}
