const targets = {};

const presets = [['@babel/env', { targets }]];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  ['angularjs-annotate', { explicitOnly: true }],
];

module.exports = api => {
  const isTestEnv = api.env('test');

  if (isTestEnv) {
    Object.assign(targets, { node: 'current' });
  } else {
    Object.assign(targets, {
      edge: '12',
      firefox: '60',
      chrome: '67',
      safari: '11.1',
      ie: '11',
    });
  }

  return { presets, plugins };
};
