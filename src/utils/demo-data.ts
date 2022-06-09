import { nanoid } from "nanoid";
import { randomStringGenerate } from ".";
import image1080Jpeg from "../assets/demo-images/image-1080w.jpeg";
import image1080Web from "../assets/demo-images/image-1080w.webp";
import image1200Jpeg from "../assets/demo-images/image-1200w.jpeg";
import image1200Web from "../assets/demo-images/image-1200w.webp";
import image1920Jpeg from "../assets/demo-images/image-1920w.jpeg";
import image1920Web from "../assets/demo-images/image-1920w.webp";
import image2048Jpeg from "../assets/demo-images/image-2048w.jpeg";
import image2048Web from "../assets/demo-images/image-2048w.webp";
import image3840Jpeg from "../assets/demo-images/image-3840w.jpeg";
import image3840Web from "../assets/demo-images/image-3840w.webp";
import image640Jpeg from "../assets/demo-images/image-640w.jpeg";
import image640Web from "../assets/demo-images/image-640w.webp";
import image750Jpeg from "../assets/demo-images/image-750w.jpeg";
import image750Web from "../assets/demo-images/image-750w.webp";
import image828Jpeg from "../assets/demo-images/image-828w.jpeg";
import image828Web from "../assets/demo-images/image-828w.webp";
import imageJpeg from "../assets/demo-images/image.jpeg";
import imageWeb from "../assets/demo-images/image.webp";
import { UserRole } from "./enums";
import { IExtendedImage, IUser, IVideo } from "./interfaces";

export const demoImage: IExtendedImage = {
  "1200": {
    height: 675,
    originalUrl: image1200Jpeg,
    webpUrl: image1200Web,
    originalName: "demo-image-1200w.jpeg",
    width: 1200,
    webpName: "demon-image-1200w.webp",
  },
  "1920": {
    height: 1080,
    originalUrl: image1920Jpeg,
    webpUrl: image1920Web,
    originalName: "demo-image-1920w.jpeg",
    width: 1920,
    webpName: "demon-image-1920w.webp",
  },
  "1080": {
    height: 608,
    originalUrl: image1080Jpeg,
    webpUrl: image1080Web,
    originalName: "demo-image-1080w.jpeg",
    width: 1080,
    webpName: "demon-image-1080w.webp",
  },
  "750": {
    height: 422,
    originalUrl: image750Jpeg,
    webpUrl: image750Web,
    originalName: "demo-image-750w.jpeg",
    width: 750,
    webpName: "demon-image-750w.webp",
  },
  "640": {
    height: 360,
    originalUrl: image640Jpeg,
    webpUrl: image640Web,
    originalName: "demo-image-640w.jpeg",
    width: 640,
    webpName: "demon-image-640w.webp",
  },
  "2048": {
    height: 1152,
    originalUrl: image2048Jpeg,
    webpUrl: image2048Web,
    originalName: "demo-image-2048w.jpeg",
    width: 2048,
    webpName: "demon-image-2048w.webp",
  },
  "3840": {
    height: 2160,
    originalUrl: image3840Jpeg,
    webpUrl: image3840Web,
    originalName: "demo-image-3840w.jpeg",
    width: 3840,
    webpName: "demon-image-3840w.webp",
  },
  "828": {
    height: 466,
    originalUrl: image828Jpeg,
    webpUrl: image828Web,
    originalName: "demo-image-828w.jpeg",
    width: 828,
    webpName: "demon-image-828w.webp",
  },
  main: {
    height: 720,
    originalUrl: imageJpeg,
    webpUrl: imageWeb,
    originalName: "demo-image.jpeg",
    width: 1280,
    webpName: "demon-image.webp",
  },
};

export const demoVideo: IVideo = {
  src: require("../assets/video.mp4"),
  thumbnail: demoImage,
  duration: 20000,
};

export const demoUsers: IUser[] = Array.from<unknown, IUser>(
  { length: 8 },
  (_, i) => ({
    avatar: i % 2 !== 0 ? demoImage : null,
    email: `${nanoid(6)}@gmail.com`,
    firstName: i % 2 === 0 && i > 2 ? randomStringGenerate() : null,
    id: nanoid(6),
    lastName: i % 2 === 0 && i > 2 ? randomStringGenerate() : null,
    role: UserRole.user,
  })
);
