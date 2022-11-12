import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import R3f, { Shoe3 } from "./R3f";
import { Canvas } from "@react-three/fiber";
import List from "./List";

export default function Html2Image() {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <div>
      Html2Image
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2462"
        width="200"
        height="200"
      >
        <text>1123</text>
        <text font-size="60">
          <tspan x="0" y="110">
            一段需要word wrap
          </tspan>
          <tspan x="0" y="126">
            的文字。
          </tspan>
        </text>
        <foreignObject width="100%" height="100%">
          <body style={{ color: "red", fontSize: "100px" }}>
            <p>xboxyan</p>
          </body>
        </foreignObject>
        <path
          d="M764.7744 146.0224v119.8592l69.4784 53.3504v-148.992c0-13.3632-10.8032-24.1664-24.1664-24.1664h-45.312z"
          fill="#FF6339"
          p-id="2463"
        ></path>
        <path
          d="M226.2016 926.8224V498.432l312.5248-246.9376 312.5248 235.4176-3.4816 434.1248z"
          fill="#ECD300"
          p-id="2464"
        ></path>
        <path
          d="M851.2512 486.912l-312.5248-235.4176-31.0784 24.576 271.8208 211.5584c6.2976 4.9152 9.9328 12.3904 9.9328 20.3776v340.736c0 14.1312-11.4176 25.5488-25.5488 25.5488H226.2016v52.5312l621.6192-5.7856 3.4304-434.1248z"
          fill="#E8A200"
          p-id="2465"
        ></path>
        <path
          d="M799.488 150.528v137.7792l25.088 18.2272V154.2656z"
          fill="#F94A21"
          p-id="2466"
        ></path>
        <path
          d="M904.4992 498.432a50.5344 50.5344 0 0 1-30.3104-10.1376l-363.8784-270.848-286.1056 223.0272c-22.0672 16.9984-66.9184 60.3136-83.8656 38.2464-16.9472-22.0672-12.8512-53.7088 9.216-70.656l358.5024-275.712a50.46272 50.46272 0 0 1 61.0816-0.3072l365.7728 275.712c22.2208 16.7424 26.6752 48.3328 9.9328 70.6048a50.46272 50.46272 0 0 1-40.3456 20.0704z"
          fill="#76BFFF"
          p-id="2467"
        ></path>
        <path
          d="M944.7936 478.3616a50.4064 50.4064 0 0 0-9.9328-70.6048l-365.7728-275.712a50.3552 50.3552 0 0 0-54.9888-3.6864c8.1408 2.3552 18.176 7.6288 30.464 17.664 46.08 37.7856 336.384 260.1472 347.0336 267.264 10.6496 7.1168 20.6336 22.8864 13.0048 38.144-7.424 14.848-28.0576 24.1152-61.6448 8.448 0.8192 3.072 17.152 16.1792 18.6368 18.9952l12.6464 9.4208a49.98656 49.98656 0 0 0 30.3104 10.1376 50.2784 50.2784 0 0 0 40.2432-20.0704z"
          fill="#659CF8"
          p-id="2468"
        ></path>
        <path
          d="M609.4336 785.5616H452.6592a48.0256 48.0256 0 0 1-48.0256-48.0256v-156.7232c0-26.5216 21.504-48.0256 48.0256-48.0256h156.7232c26.5216 0 48.0256 21.504 48.0256 48.0256v156.7232c0.0512 26.5216-21.4528 48.0256-47.9744 48.0256z"
          fill="#76BFFF"
          p-id="2469"
        ></path>
        <path
          d="M657.4592 737.536v-156.7232c0-22.528-15.5136-41.3696-36.4032-46.592v191.2832c0 11.5712-9.3696 20.9408-20.9408 20.9408H405.504c4.1984 22.272 23.7056 39.168 47.2064 39.168h156.7232c26.5216-0.0512 48.0256-21.5552 48.0256-48.0768z"
          fill="#659CF8"
          p-id="2470"
        ></path>
        <path
          d="M274.7392 729.0368a12.8 12.8 0 0 1-12.8-12.8v-19.5072a12.8 12.8 0 0 1 25.6 0v19.5072a12.8 12.8 0 0 1-12.8 12.8zM274.7392 659.6608a12.8 12.8 0 0 1-12.8-12.8v-103.4752c0-9.216 4.4544-17.92 11.8272-23.3472l37.9904-27.7504c5.6832-4.1472 13.7216-2.9184 17.8688 2.7648s2.9184 13.7216-2.7648 17.8688l-37.9904 27.7504c-0.8704 0.6144-1.3312 1.6384-1.3312 2.6624v103.4752c0 7.1168-5.7344 12.8512-12.8 12.8512z"
          fill="#FFFFFF"
          p-id="2471"
        ></path>
        <path
          d="M206.3872 330.6496c3.2768 0 6.5536-1.024 9.3696-3.1744l12.7488-9.8304a15.39072 15.39072 0 0 0 2.816-21.5552 15.39072 15.39072 0 0 0-21.5552-2.816l-12.7488 9.8304a15.39072 15.39072 0 0 0-2.816 21.5552c3.0208 3.8912 7.5776 5.9904 12.1856 5.9904zM175.2064 693.0944c8.4992 0 15.36-6.8608 15.36-15.36v-15.6672c0-8.4992-6.8608-15.36-15.36-15.36s-15.36 6.8608-15.36 15.36v15.6672c0 8.448 6.8608 15.36 15.36 15.36z"
          fill="#333333"
          p-id="2472"
        ></path>
        <path
          d="M941.6704 911.4624h-75.0592V504.576c10.4448 6.0416 22.1696 9.216 34.4064 9.216 21.9648 0 42.1376-10.0352 55.3472-27.5456 22.9888-30.464 16.896-73.984-13.6192-96.9728l-93.1328-70.1952V170.1888c0-21.8112-17.7152-39.5264-39.5264-39.5264h-52.5824c-21.8112 0-39.5264 17.7152-39.5264 39.5264v49.664l-166.2976-125.3888c-24.7808-18.688-59.2896-18.5344-83.9168 0.4096l-214.016 164.608c-6.7072 5.1712-7.9872 14.7968-2.816 21.5552s14.848 7.9872 21.5552 2.816l214.0672-164.6592a38.5536 38.5536 0 0 1 46.6944-0.2048l391.0656 294.8096c16.9472 12.8 20.3776 36.9664 7.5776 53.9648-7.3728 9.728-18.5856 15.36-30.8224 15.36-8.3968 0-16.4352-2.6624-23.1424-7.7824l-358.2976-270.08a15.36 15.36 0 0 0-18.5856 0.1024L150.2208 475.0848a38.1696 38.1696 0 0 1-28.4672 7.68 38.38976 38.38976 0 0 1-25.5488-14.6944c-12.9536-16.8448-9.7792-41.0624 7.0656-54.016l53.0944-40.8064c6.7072-5.1712 7.9872-14.7968 2.816-21.5552s-14.848-7.9872-21.5552-2.816L84.48 389.632c-30.2592 23.296-35.9424 66.816-12.6976 97.1264 11.264 14.6432 27.5968 24.064 45.9264 26.4704a68.67456 68.67456 0 0 0 42.0864-7.8336v96.1536c0 8.4992 6.8608 15.36 15.36 15.36s15.36-6.8608 15.36-15.36V486.912c0-1.28-0.2048-2.5088-0.512-3.7376l320.3584-246.4256 325.4784 245.3504v429.312H190.5664v-151.3472c0-8.4992-6.8608-15.36-15.36-15.36s-15.36 6.8608-15.36 15.36v151.3472H87.3984c-8.4992 0-15.36 6.8608-15.36 15.36s6.8608 15.36 15.36 15.36h854.272c8.4992 0 15.36-6.8608 15.36-15.36s-6.8608-15.3088-15.36-15.3088zM748.6976 170.1888c0-4.864 3.9424-8.8064 8.8064-8.8064h52.5824c4.864 0 8.8064 3.9424 8.8064 8.8064v125.696l-70.1952-52.8896V170.1888z"
          fill="#333333"
          p-id="2473"
        ></path>
        <path
          d="M439.04 673.3312c-8.4992 0-15.36 6.8608-15.36 15.36s6.8608 15.36 15.36 15.36H496.64v29.3376c0 8.4992 6.8608 15.36 15.36 15.36s15.36-6.8608 15.36-15.36v-29.3376h57.6c8.4992 0 15.36-6.8608 15.36-15.36s-6.8608-15.36-15.36-15.36H527.36v-34.7648h57.6c8.4992 0 15.36-6.8608 15.36-15.36s-6.8608-15.36-15.36-15.36h-43.3152l31.1808-37.7856c5.376-6.5536 4.4544-16.2304-2.048-21.6064a15.34464 15.34464 0 0 0-21.6064 2.048l-37.4784 45.4144-37.7856-43.4688a15.3856 15.3856 0 0 0-21.6576-1.536 15.3856 15.3856 0 0 0-1.536 21.6576l30.6176 35.2256h-42.3424c-8.4992 0-15.36 6.8608-15.36 15.36s6.8608 15.36 15.36 15.36H496.64v34.7648H439.04z"
          fill="#333333"
          p-id="2474"
        ></path>
        <path
          d="M609.4336 800.9216c34.9696 0 63.3856-28.4672 63.3856-63.3856v-191.0272c0-34.9696-28.4672-63.3856-63.3856-63.3856H418.3552c-34.9696 0-63.3856 28.4672-63.3856 63.3856v191.0272c0 34.9696 28.4672 63.3856 63.3856 63.3856h191.0784z m-223.744-63.3856v-191.0272c0-18.0224 14.6432-32.6656 32.6656-32.6656h191.0784c18.0224 0 32.6656 14.6432 32.6656 32.6656v191.0272c0 18.0224-14.6432 32.6656-32.6656 32.6656H418.3552c-18.0224 0-32.6656-14.6432-32.6656-32.6656z"
          fill="#333333"
          p-id="2475"
        ></path>
      </svg>
      <button onClick={onButtonClick}>Click me</button>
      <div ref={ref}>
        <List />
      </div>
    </div>
  );
}
