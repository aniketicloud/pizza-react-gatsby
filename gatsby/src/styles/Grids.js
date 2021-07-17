import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

// Single Grid Item (for home page)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    border: 1px solid green;
    height: auto;
  }
  p {
    width: 100%;
    position: absolute;
    transform: rotate(-2deg) translateY(-50%);
    left: 0;
  }
  .mark {
    display: inline;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      /* this 40px lines with var(--shine) 40px inside background-image */
      background-position: -40px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
