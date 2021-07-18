import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
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
    height: auto;
  }
  p {
    position: absolute;
    left: 0;
    top: 0;
    /* margin: 0; to override previous margin */
    margin: 0;
    transform: rotate(-2deg) translateY(-20px);
    width: 100%;

    /* instead of using media query for 320px, using clamp with fallback of 1.5rem */
    font-size: 1.5rem;
    font-size: clamp(12px, 5vw, 20px);
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
