export interface IImage {
  url: string;
  width: number;
  height: number;
}

const Image = ({url, width, height}: IImage) => (
  <img src={url} width={width} height={height} style={{border: '1px solid #05386b'}} alt={'Not found'}/>
);

export default Image;
