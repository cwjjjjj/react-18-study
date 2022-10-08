import { css } from "@emotion/react";
import axios from "axios";
import * as PIXI from "pixi.js";
import { useEffect } from "react";
import img from "../assets/children-share.png";

export default function Pixi() {
  console.log("PIXI", PIXI);
  let app;
  //Create a Pixi Application
  // useEffect(() => {
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 123333,
  });

  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);

  let sprite = PIXI.Sprite.from(img);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  sprite.anchor.set(0.5);
  app.stage.addChild(sprite);
  app.ticker.add((delta) => {
    sprite.rotation -= 0.01 * delta;
  });
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
    </div>
  );
}
