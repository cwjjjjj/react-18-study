import { css } from "@emotion/react";
import axios from "axios";
import * as PIXI from "pixi.js";
import { HTMLAttributes, useEffect, useRef } from "react";
import img from "../assets/children-share.png";

export default function Pixi() {
  const ref = useRef<HTMLDialogElement>(null);
  console.log("PIXI", PIXI);

  useEffect(() => {
    let app;
    //Create a Pixi Application
    // useEffect(() => {
    app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 123333,
    });

    let sprite = PIXI.Sprite.from(img);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);
    app.ticker.add((delta) => {
      sprite.rotation -= 0.01 * delta;
    });

    document.body.appendChild(app.view);

    return () => {
      document.body.removeChild(app.view);
    };
  }, []);

  // }, []);
  console.log("axios", axios);
  return (
    <div>
      Pixi
      <time dateTime="2010-11-13">2010-11-13</time>
      <a
        href="./test"
        css={css`
          display: none;
        `}
      >
        test1
      </a>
      <a href="#test2">test2</a>
      <a href="#test3">test3</a>
      <a href="#test4">test4</a>
      <label>
        Do you like peas?
        <input type="checkbox" name="peas" />
      </label>
      <label for="test">Do you like peas111?</label>
      <input type="checkbox" name="peas" id="test" />
      <details>
        <summary>HTML5 我会展示</summary>
        This document teaches you everything you have to learn about
        HTML5.我需要点击才展示
      </details>
      ​​<label for="ice-cream-choice">Choose a flavor:</label>
      <input
        list="ice-cream-flavors"
        id="ice-cream-choice"
        name="ice-cream-choice"
      />
      <mark>tesqeqwet</mark>
      <datalist id="ice-cream-flavors">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
      <progress value={12} max={100} />
      <meter value={1000} max={170} optimum={30}>
        40/170
      </meter>
      <button
        onClick={() => {
          if (!ref.current) return;
          ref.current.show();
        }}
      >
        show dialog
      </button>
      <button
        onClick={() => {
          if (!ref.current) return;
          ref.current.close();
        }}
      >
        close dialog
      </button>
      <dialog ref={ref}>123</dialog>
      <small>213</small>
    </div>
  );
}
