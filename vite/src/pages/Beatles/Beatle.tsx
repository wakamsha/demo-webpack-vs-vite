import { css } from '@emotion/css';
import { Link, useParams } from 'react-router-dom';
import { BEATLES } from '.';
import { Router } from '../../constants/Router';
import { Color } from '../../constants/Style';
import { gutter } from '../../utils/Style';

type Params = {
  id: string;
};

export const Beatle = () => {
  const { id } = useParams<Params>();

  const beatle = BEATLES.find(beatle => beatle.id === id);

  return beatle ? (
    <article className={containerStyle}>
      <h3>
        {beatle.nameEn} ( <small>{beatle.nameJa}</small> )
      </h3>
      <p>{beatle.part}</p>
      <Link to={Router.Paths.Beatles}>もどる</Link>
    </article>
  ) : (
    <p>The Beatles with id {id} does not exist.</p>
  );
};

const containerStyle = css`
  padding: ${gutter(4)};
  border: 1px solid ${Color.Line};
`;
