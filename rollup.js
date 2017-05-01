const rollup = require('rollup')
const babel = require('rollup-plugin-babel')

rollup.rollup({
  entry: 'src/index.js',
  plugins: [ babel({
  }) ],
}).then(bundle=> {
  bundle.write({
    dest: 'dist/bundle.js',
    format: 'umd',
  	moduleName: 'jshelpers',
  })
})