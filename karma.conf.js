module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // afficher le résultat des tests dans le navigateur
    },
    browsers: ['ChromeHeadless'],
    singleRun: true, // exécute les tests une seule fois
    restartOnFileChange: false,
    reporters: ['progress'],
  });
};
