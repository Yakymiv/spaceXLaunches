import {
  Wrapper,
  ModalContetn,
  Message,
  Header,
  LaunchContent,
  BlockWrapper,
  InfoBlock,
  InfoTitle,
  InfoDesc,
  Footer,
  Button,
} from './Modal.styles';
import { useModal } from './Modal.hook';

const Modal = ({ handleClose, launchId }: any) => {
  const { isLoading, launch, rocketName } = useModal(launchId);
  const launchDate = new Date(launch.date_local).toLocaleDateString('en-US');

  return (
    <Wrapper>
      <ModalContetn>
        {isLoading && <Message>Loading...</Message>}
        <Header>
          <h2>{launch.name}</h2>
        </Header>
        <LaunchContent>
          <BlockWrapper>
            <iframe
              src={`http://www.youtube.com/embed/${launch?.links?.youtube_id}`}
              frameBorder="0"
              width="480"
              height="300"
            />
          </BlockWrapper>
          <BlockWrapper>
            {launch.details && (
              <InfoBlock>
                <InfoTitle>Details: </InfoTitle>
                <InfoDesc>{launch.details}</InfoDesc>
              </InfoBlock>
            )}
            {launch.details && (
              <InfoBlock>
                <InfoTitle>Launch date: </InfoTitle>
                <InfoDesc>{launchDate}</InfoDesc>
              </InfoBlock>
            )}
            {rocketName && (
              <InfoBlock>
                <InfoTitle>Rocket: </InfoTitle>
                <InfoDesc>{rocketName}</InfoDesc>
              </InfoBlock>
            )}
          </BlockWrapper>
        </LaunchContent>
        <Footer>
          <Button onClick={handleClose}>Close</Button>
        </Footer>
      </ModalContetn>
    </Wrapper>
  );
};

export default Modal;
