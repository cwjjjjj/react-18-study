import { css } from "@emotion/react";

function App() {
  return (
    <div
      // className=" text-red-300"
      css={css`
        font-size: 100px;
        color: red;
      `}
    >
      react
    </div>
  );
}

export default App;
