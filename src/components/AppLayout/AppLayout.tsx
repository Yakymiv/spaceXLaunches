import Thumbnail from './../Thumbnail';
import FilterPanel from '../FilterPanel';
import Modal from '../Modal';
import { ThumbnailContent, Message } from './AppLayout.styles';
import { useAppLayout } from './AppLayout.hook';

const AppLayout = () => {
  const {
    launchesData,
    isLoading,
    lastPostRef,
    setQuery,
    setLaunchesData,
    handleClose,
    isModalOpen,
    handleOpen,
    launchId,
  } = useAppLayout();

  return (
    <>
      <FilterPanel setQuery={setQuery} setLaunchesData={setLaunchesData} />
      <ThumbnailContent>
        {launchesData.map(({ id, links }, i) => {
          if (launchesData.length === i + 1) {
            return (
              <Thumbnail
                handleOpen={(e: any) => handleOpen(e, id)}
                lastPostRef={lastPostRef}
                key={id}
                youtubeId={links.youtube_id}
              />
            );
          }
          return <Thumbnail handleOpen={(e: any) => handleOpen(e, id)} key={id} youtubeId={links.youtube_id} />;
        })}
      </ThumbnailContent>
      {!launchesData.length && !isLoading && <Message>Launches have been no found.</Message>}
      {isLoading && <Message>Loading...</Message>}
      {isModalOpen && <Modal launchId={launchId} handleClose={handleClose} />}
    </>
  );
};

export default AppLayout;
