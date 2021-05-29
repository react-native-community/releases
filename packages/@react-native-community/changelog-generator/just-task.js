const {series, task} = require('just-scripts');

require('@rnw-scripts/just-task');
task('lint', series('eslint', 'ts'));
