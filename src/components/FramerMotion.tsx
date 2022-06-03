import { css } from "@emotion/react";
import { motion } from "framer-motion";

export default function FramerMotion() {
  return (
    <div
      style={{ height: "100vh" }}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <motion.div
        css={css`
          width: 100px;
          height: 100px;
          background: red;
        `}
        animate={{
          scale: [10, 8, 6, 4, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          backgroundColor: ["#00F", "#FAA", "#FC0", "#F00", "#0FF"],
        }}
      />
    </div>
  );
}
