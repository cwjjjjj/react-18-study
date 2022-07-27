import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Button } from "rsuite";

export default function FramerMotion() {
  return (
    <div
      style={{ height: "100vh" }}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
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
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        test
      </motion.button>
      <div
        css={css`
          width: 200px;
          height: 200px;
          background: orange;
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
          drag
          dragConstraints={{
            left: -50,
            right: 50,
          }}
          whileHover={{ scale: [1, 1.1, 1] }}
          whileTap={{ scale: 0.9 }}
        >
          darg
        </motion.div>
        <Button>rsuite</Button>
        <motion.div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 100px;
            background: pink;
          `}
          initial={true}
          animate={{
            y: 100,
            x: 100,
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            backgroundColor: ["#00F", "#FAA", "#FC0", "#F00", "#0FF"],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background: pink;
          `}
          draggable={true}
          onDrag={() => {
            console.log("drag");
          }}
        >
          test native drag
        </div>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background: green;
          `}
        >
          test native drag
        </div>
      </div>
    </div>
  );
}
