import styled from 'styled-components';

interface PToken {
  ID: string;
  Name: string;
  Symbol: string;
  PSymbol: string;
}

interface IProps {
  pTokens: PToken[];
}

const Token = (props: PToken) => {
  const { ID, Name, Symbol, PSymbol } = props;
  return (
    <div className='token'>
      <p className='column'>{ID}</p>
      <p className='column'>{Name}</p>
      <p className='column'>{Symbol}</p>
      <p className='column'>{PSymbol}</p>
    </div>
  );
};

const Container = styled.div`
  &.container {
    .tokens-container {
      max-height: 100vh;
      background: #282c34;
      color: #e6e5e8;
    }
    .tokens-container .token {
      border-bottom: solid 1px #aaa;
      display: grid;
      grid-template-columns: 1fr 2fr 3fr 4fr;
      padding: 10px 0;
      :hover {
        background-color: rgba(255, 255, 255, 0.04);
        cursor: pointer;
      }
    }
    .tokens-container .token .column {
      display: flex;
      justify-content: center;
    }
  }
`;

const App = (props: IProps) => {
  const { pTokens = [] } = props;
  return (
    <Container className='container'>
      <div className='tokens-container'>
        {pTokens.map((token: PToken) => (
          <Token key={token?.ID} {...token} />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://api-staging.incognito.org/ptoken/list`);
  const pTokensJson = await res.json();
  return {
    props: {
      pTokens: pTokensJson?.Result,
    },
  };
};

export default App;
