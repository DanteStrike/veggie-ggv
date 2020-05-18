'use strict';

const buildBaseDir: string = `./build`;
const buildAssetsDir: string = `${buildBaseDir}/assets`;
const srcBaseDir: string = `./src`;

interface Paths {
  src: {
    base: string;
    normolizeCSS: string;
    htmlPages: string;
    font: string;
    img: string;
    scssMain: string;
    scssAll: string;
    compiledCSS: string;
    jsMain: string;
    jsAll: string;
    restMocks: string;
    svgIcons: string;
    svgSprite: string;
    createdSprite: string;
  }

  build: {
    base: string;
    htmlPages: string;
    font: string;
    img: string;
    css: string;
    js: string;
    restMocks: string;
  },
}
const paths: Paths = {
  src: {
    base: `${srcBaseDir}`,
    normolizeCSS: `./node_modules/normalize.css/normalize.css`,
    htmlPages: `${srcBaseDir}/*.html`,
    font: `${srcBaseDir}/font/*.{otf, ttf, woff, woff2}`,
    img: `${srcBaseDir}/img/*.*`,
    scssMain: `${srcBaseDir}/scss/style.scss`,
    scssAll: `${srcBaseDir}/scss/**/*.scss`,
    compiledCSS: `${srcBaseDir}/scss/__css-style`,
    jsMain: `${srcBaseDir}/js/main.js`,
    jsAll: `${srcBaseDir}/js/**/*.js`,
    restMocks: `${srcBaseDir}/js/rest-mock/*.json`,
    svgSprite: `${srcBaseDir}/sprite`,
    svgIcons: `${srcBaseDir}/sprite/svg-icons/*.svg`,
    createdSprite: `${srcBaseDir}/sprite/sprite.svg`
  },

  build: {
    base: `${buildBaseDir}`,
    htmlPages: `${buildBaseDir}/`,
    font: `${buildAssetsDir}/font/`,
    img: `${buildAssetsDir}/img/`,
    css: `${buildAssetsDir}/css/`,
    js: `${buildAssetsDir}/js/`,
    restMocks: `${buildAssetsDir}/js/rest-mock`
  },
};

interface LiveServerConfig {
  server: {
    baseDir: string;
  },
  tunnel?: boolean;
  host?: string;
  port?: number;
  logPrefix?: string;
}
const liveServerConfig: LiveServerConfig = {
  server: {
    baseDir: buildBaseDir
  },
  tunnel: false,
  host: `localhost`,
  port: 9090,
  logPrefix: `Frontend_DevilDante`
};

interface SvgSpriteConfig {
  mode: {
    css: {
      dest: string;
      layout: string;
      bust: boolean;
      sprite: string;
      render: {
        css: boolean;
      }
    }
  }
}
const svgSpriteConfig: SvgSpriteConfig = {
  mode: {
    css: {
      dest: `./`,
      layout: `diagonal`,
      bust: false,
      sprite: `sprite.svg`,
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};

export = {
  paths,
  liveServerConfig,
  svgSpriteConfig
};
