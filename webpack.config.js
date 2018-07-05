module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    include: [
      'app/web/page',
      {
        layout: 'app/web/framework/layout/layout.jsx?loader=false'
      },
    ],
    exclude: [],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  alias: {
    // '~': 'app/web',
  },
  dll: ['react', 'react-dom'],
  loaders: {
    typescript: true,
    eslint: true
  },
  plugins: {

  },

  done() {
    console.log('---webpack compile finish---');
  }
};