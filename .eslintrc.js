module.exports = {
  extends: 'airbnb',
  globals: {},
  rules: {
    'valid-jsdoc': [2, {
      requireReturn: false,
      prefer: {
        returns: 'return',
      },
    }],
    'require-jsdoc': 1,
    'max-len': [1, 80, 4, {
      ignoreComments: true,
      ignoreUrls: true,
    }],
  },
};
