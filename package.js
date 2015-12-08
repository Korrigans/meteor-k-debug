Package.describe({
  name: 'korrigans:k-debug',
  version: '0.1.0',
  debugOnly: true,
  git: 'https://github.com/Korrigans/meteor-k-debug.git',
  summary: 'Define a debug only variable. By itself this package does nothing.',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'korrigans:k@0.1.0',
    'ecmascript'
  ]);

  api.imply('korrigans:k');

  api.addFiles('k-debug.js');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'sanjo:jasmine@0.20.2',
    'korrigans:k-debug'
  ]);

  //Console tests convenience
  api.imply('korrigans:k');

  api.addFiles('k-debug-tests.js');
});
