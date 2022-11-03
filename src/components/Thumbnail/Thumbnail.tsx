import { Cart } from './Thumbnail.styles';

interface VideoBlockProps {
  youtubeId: string;
  lastPostRef?: any;
  handleOpen: any;
}

const Thumbnail = ({ handleOpen, youtubeId, lastPostRef }: VideoBlockProps) => {
  const Thumbnail = <img src={`http://img.youtube.com/vi/${youtubeId}/0.jpg`} alt="Logo" />;
  return lastPostRef ? (
    <Cart onClick={handleOpen} ref={lastPostRef}>
      {Thumbnail}
    </Cart>
  ) : (
    <Cart onClick={handleOpen}>{Thumbnail}</Cart>
  );
};

export default Thumbnail;
