import { useEffect, useRef, useState } from "react";
export default function KeyBoard() {
  const [test, setTest] = useState(0);
  // 每次 useEffect rerun 的时候都会完整的执行，包括卸载
  useEffect(() => {
    console.log("start", test);
    // if ("serviceWorker" in navigator) {
    //   window.addEventListener("load", function () {
    //     // 所以Service Worker只是一个挂在navigator对象上的HTML5 API而已
    //     navigator.serviceWorker.register("/service-worker.js").then(
    //       function (registration) {
    //         console.log("我注册成功了666");
    //       },
    //       function (err) {
    //         console.log("我注册失败了");
    //       }
    //     );
    //   });
    // }
    // var worker = new Worker("./worker.js");
    // console.log("worker", worker);

    return () => {
      console.log("end", test);
    };
  }, [test]);

  const testRef = useRef(() => {
    console.log("testRef");
  }).current;
  return (
    <div>
      {test}
      <button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        change
      </button>
      <button onClick={testRef}>testRef</button>
    </div>
  );
}
