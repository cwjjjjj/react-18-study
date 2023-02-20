import { css } from "@emotion/react";
import React from "react";

export default function InputCss() {
  return (
    <div
      css={css`
        input:in-range {
          background-color: rgba(0, 255, 0, 0.25);
        }
        /* out-of-range */
        input:out-of-range {
          background-color: rgba(255, 0, 0, 0.25);
        }
        input:invalid {
          animation: shake 0.2s ease-in-out 0s 2;
          box-shadow: 0 0 0.4em red;
        }
        @keyframes shake {
          0% {
            margin-left: 0rem;
          }
          25% {
            margin-left: 0.5rem;
          }
          75% {
            margin-left: -0.5rem;
          }
          100% {
            margin-left: 0rem;
          }
        }
      `}
    >
      InputCss
      <input type="number" min={1} max={5} />
    </div>
  );
}
