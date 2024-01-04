const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'app',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      remotes: {},
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};