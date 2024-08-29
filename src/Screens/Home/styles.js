import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  padding: 0 12px;
  z-index: 2;
`;

export const SectionInformations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background: url('./isolation-mode.svg') no-repeat center;
  background-size: cover;

  .glasses-using {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    max-width: 800px;

    .user-experience {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;

      img {
        &:hover {
          opacity: 0.6;
          transition: 0.5s ease-in-out;
        }
      }

      div,
      span {
        display: flex;
        align-items: center;
        gap: 24px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 56px 0;

  .links {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

    a {
      display: flex;
      gap: 32px;
      font-size: 16px;
      font-weight: 400;
      line-height: auto;
      letter-spacing: 0%;
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.error};
        font-size: 16px;
        transition: 0.5s ease-in-out;
      }
    }
  }

  .logo {
    width: 98px;
    height: 28px;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 72px 0;
  width: 100%;

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .follow-us {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.2rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${theme.colors.white};
    }
  }

  .container-buttons {
    display: flex;
    gap: 12px;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
    width: 100%;
  }

  .image {
    width: 100%;
    max-width: 700px;
    height: auto;
    z-index: -1;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 40px;
  width: 100%;
  max-width: 704px;

  h1 {
    max-width: 570px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: ${theme.colors.white};
  }

  .infos {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;

    div {
      flex-basis: calc(100% / 2 - 12px);
    }
  }

  img {
    width: 22px;
    height: 22px;
  }

  .high-resolution {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate {
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .inside-tracking {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .eye-tracking {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .high-resolution1 {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }

  .refresh-rate1 {
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
    color: ${theme.colors.white};
  }
`;

export const GamingCreation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  width: 100%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 100%;
    padding: 20px 0;
  }

  .creater {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    .people {
      width: 100%;
      max-width: 700px;
      /* border: 2px solid ${theme.colors.purpledark};
      box-shadow: 0px 10px 10px rgba(203, 0, 221, 0.2); */
    }

    .coments {
      position: absolute;
      max-width: 416px;
      left: -30px;
      bottom: -40px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const GameCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  h1 {
    max-width: 425px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 130%;
    letter-spacing: -0.02em;
    order: 0;
    flex-grow: 0;
    color: ${theme.colors.white};
  }

  p {
    width: 568px;
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.white};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    background: rgba(50, 116, 248, 0.12);
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${theme.colors.lightblue};

    &:hover {
      opacity: 0.6;
      transition: 0.5s ease-in-out;
    }
  }
`;
