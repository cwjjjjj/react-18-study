import { mockUsers } from "@/Mock";
import { css } from "@emotion/react";
import { m, motion, Variants } from "framer-motion";

export const visitorListItemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    rotateX: 90,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.02 * (index % 20),
      ease: [0.5, 1, 0.89, 1],
    },
  }),
} as Variants;

export default function List() {
  return (
    <div
      css={css`
        background-color: red;
        display: flex;
        gap: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 5px;
        `}
      >
        {[1, 2, 3, 4, 5].map((item, index) => {
          console.log("item", index);
          return (
            <div
              key={index}
              css={css`
                height: 50px;
                width: 100px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: orange;

                animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  both ${index / 10}s;

                @keyframes slide-top {
                  0% {
                    transform: translateY(100px);
                  }
                  100% {
                    transform: translateY(0px);
                  }
                }
              `}
            >
              {index}
            </div>
          );
        })}
      </div>

      <div>
        {mockUsers.map((item, index) => (
          <motion.div
            css={css`
              display: grid;
              grid-template-columns: 1fr auto;
              gap: 10px;
              padding: 10px 10px 10px 48px;
              position: relative;

              &:not(:first-of-type) {
                border-top: 1px solid rgba(255, 255, 255, 0.2);
              }
            `}
            key={item.id}
            variants={visitorListItemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;

                width: 48px;
              `}
            >
              <span>{item.rank}</span>
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 8px;
              `}
            >
              <img
                src={item.avatarImage.thumbnailUrl}
                css={css`
                  width: 44px;
                  height: 44px;
                `}
              />
              <span
                css={css`
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 20px;
                  color: white;
                `}
              >
                {item.screenName}
              </span>
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;

                font-weight: 500;
                font-size: 12px;
                line-height: 17px;

                text-align: right;
                color: rgba(255, 255, 255, 0.5);
              `}
            >
              {item.visitTimes}次
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
