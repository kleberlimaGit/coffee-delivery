import styled  from 'styled-components';

export const MainComponent = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  img {
    width: 24rem;
  }

  div h1,h2 {
    font-family: "Baloo 2", cursive;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  div > div {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .beneficity {
    margin-top: 1rem;
    display: flex;
    gap: 4px;
    font-size: 13px;
    align-items: center;
  }
`;

const COLOR_PROPS = {
  sage: "sage",
  green: "green",
  yellow: "yellow",
  burlywood: "burlywood",
} as const;

interface ColorProps {
  colorProps: keyof typeof COLOR_PROPS;
}

export const BeneficityColor = styled.span<ColorProps>`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: ${(props) => props.theme[COLOR_PROPS[props.colorProps]]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionComponent = styled.section`

h2 {
    font-family: "Baloo 2", cursive;
    font-weight: bold;
    margin-bottom: 2rem;
}

.container {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
}

`