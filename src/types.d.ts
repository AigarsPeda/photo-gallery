// necessary for import Img from "./assets/lumin-min.png" to work
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
