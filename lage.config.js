module.exports = {
  pipeline: {
    build: ["^build"],
    lint: ["build"],
    'lint:fix': [],
    test: ["build"],
    format: [],
    'format:verify': [],
    clean: [],
  },
  cacheOptions: {
    outputGlob: [
      "lib/**",
      "lib-commonjs/**",
    ],
  }
};