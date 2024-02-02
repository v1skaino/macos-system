import localFont from "next/font/local";

export const SFPRO = localFont({
  src: [
    {
      path: "./SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
