import { css, injectGlobal } from '@emotion/css';
import { Color, FontFamily } from '../constants/Style';

/**
 * Margin や Padding など余白の値を算出して返す。
 *
 * 余白は 4 の倍数として定義されている。
 * @param value
 */
export function gutter(value: number): string {
  return `${4 * value}px`;
}

/**
 * 矩形サイズを返す。
 *
 * @param value 一辺の長さ
 */
export function square(value: string | number) {
  return {
    width: value,
    height: value,
  };
}

export function textEllipsis() {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

export function applyGlobalStyle() {
  return injectGlobal`
    /* Reset */
    /* 以下を参考 */
    /* https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.min.css */
    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
    }
    html {
      overflow-x: hidden;
      font-family: sans-serif;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      scroll-behavior: smooth;
    }
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }
    img,
    picture {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;

      &:focus:not(:focus-visible) {
        /* キーボード操作"以外"でフォーカスされた際は outline を消す */
        outline: 0;
      }
    }
    main {
      display: block;
      overflow-x: hidden;
    }

    /* Scaffolding */
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${FontFamily.Default};
      font-weight: 500;
      font-feature-settings: palt 1;
      line-height: 1.8;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
    ul,
    ol {
      padding: 0;
      list-style: none;
    }
    /* stylelint-disable-next-line no-descending-specificity */
    a {
      color: ${Color.ThemeAccent};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;
}
