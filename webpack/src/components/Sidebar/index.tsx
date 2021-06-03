import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BorderRadius, Color, FontSize } from '../../constants/Style';
import { gutter, square } from '../../utils/Style';
import Logo from './logo192.png';

type Item = {
  label: string;
  to: string;
};

type Props = {
  title: string;
  items: Item[];
};

export const Sidebar = ({ title, items }: Props) => {
  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div role="complementary" className={styleBase}>
      <header className={styleMasthead}>
        <img src={Logo} alt="React Logo" className={styleLogo} />
        <h1 className={styleTitle}>
          <Link to="/">{title}</Link>
        </h1>
      </header>

      <nav className={styleBody}>
        <ul className={styleNavigation} role="tree">
          {items.map((item, i) => (
            <li key={i} className={styleItem} role="treeitem" aria-selected={item.to === pathname}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const styleBase = css`
  display: grid;
  flex-shrink: 0;
  grid-template-rows: auto auto 1fr;
  grid-gap: ${gutter(4)};
  height: 100vh;
  overflow-y: auto;
  background: ${Color.TextureBody};
  border-right: 1px solid ${Color.Line};
`;

const styleMasthead = css`
  flex-shrink: 0;
  padding: ${gutter(3)} ${gutter(4)} 0;

  > :not(:first-child) {
    margin-top: ${gutter(2)};
  }
`;

const styleLogo = css`
  display: block;
  padding: ${gutter(1)};
  margin: auto;
  background-color: ${Color.ThemePrimary};
  border-radius: ${BorderRadius.Circle};
  ${square(40)}
`;

const styleTitle = css`
  margin: 0;
  text-align: center;

  &:hover {
    background-color: #e3e3e7;
  }

  > a {
    display: block;
    padding: ${gutter(1)};
    font-size: ${FontSize.Medium};
  }
`;

const styleBody = css`
  flex-grow: 1;
  padding: 0 ${gutter(4)} ${gutter(20)};
  overflow-y: auto;
`;

const styleNavigation = css`
  padding: 0;
  margin: 0;
  font-size: ${FontSize.Regular};
  list-style: none;
`;

const styleItem = css`
  margin-bottom: ${gutter(2)};

  > a {
    display: block;
    padding: 0;
    color: ${Color.TextNeutral};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &[aria-selected='true'] {
    > a {
      font-weight: bold;
      color: ${Color.ThemeAccent};
      pointer-events: none;
    }
  }
`;
