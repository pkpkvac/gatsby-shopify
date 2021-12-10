import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section`
  /* direct child div */
  > div:first-child {
    border: 3px solid #ccc;
  }

  /* turn the last div into a grid layout for the thumbnail */
  > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
