import { css } from '@emotion/css';
import { ComponentProps } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Router } from './constants/Router';
import { About } from './pages/About';
import { Beatles } from './pages/Beatles';
import { Home } from './pages/Home';
import { gutter } from './utils/Style';

export const App = () => (
  <BrowserRouter>
    <div className={styleBase}>
      <Sidebar title="webpack vs Vite" items={linkItems} />
      <main className={styleContent}>
        <Switch>
          <Route path={Router.Paths.Home} component={Home} exact />
          <Route path={Router.Paths.About} component={About} />
          <Route path={Router.Paths.Beatles} component={Beatles} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

const linkItems: ComponentProps<typeof Sidebar>['items'] = [
  {
    label: 'Home',
    to: Router.Paths.Home,
  },
  {
    label: 'About',
    to: Router.Paths.About,
  },
  {
    label: 'The Beatles',
    to: Router.Paths.Beatles,
  },
];

const styleBase = css`
  display: flex;
  width: 100%;
`;

const styleContent = css`
  flex-grow: 1;
  height: 100vh;
  padding: ${gutter(4)};
`;
