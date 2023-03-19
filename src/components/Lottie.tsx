import { Lottie } from "@alfonmga/react-lottie-light-ts";
import React from "react";

export default function LottieFC() {
  return (
    <div>
      Lottie
      <Lottie
        config={{
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://cdnv2.ruguoapp.com/FqpF7lg72EghYZWWV0lUZ7diqP_b.json",
        }}
        width="60px"
        height="60px"
      />
    </div>
  );
}
