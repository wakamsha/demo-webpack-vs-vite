import { css } from '@emotion/css';
import { Link, Route, Switch } from 'react-router-dom';
import { Router } from '../../constants/Router';
import { gutter } from '../../utils/Style';
import { Beatle } from './Beatle';
import { Top } from './Top';

export const Beatles = () => (
  <div>
    <h1>Beatles page</h1>
    <ul className={styleNavigation}>
      {BEATLES.map(({ id, nameEn }) => (
        <li key={id}>
          <Link to={`/beatles/${id}`}>{nameEn}</Link>
        </li>
      ))}
    </ul>

    <Switch>
      <Route path={Router.Paths.Beatles} component={Top} exact />
      <Route path={Router.Paths.BeatleShow} component={Beatle} />
    </Switch>
  </div>
);

const styleNavigation = css`
  margin-bottom: ${gutter(4)};
`;

type Beatle = {
  id: string;
  nameEn: string;
  nameJa: string;
  part: string;
};

export const BEATLES: Beatle[] = [
  {
    id: 'john',
    nameEn: 'John Lennon',
    nameJa: 'ジョン・レノン',
    part: 'Vocal, Guitar',
  },
  {
    id: 'paul',
    nameEn: 'Paul McCartney',
    nameJa: 'ポール・マッカトニー',
    part: 'Vocal, Bass',
  },
  {
    id: 'george',
    nameEn: 'George Harrison',
    nameJa: 'ジョージ・ハリスン',
    part: 'Vocal, Guitar',
  },
  {
    id: 'ringo',
    nameEn: 'Ringo Starr',
    nameJa: 'リンゴ・スター',
    part: 'Vocal, Drums',
  },
];
