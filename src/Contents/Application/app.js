APP_NAMESPACE = Settings.NAMESPACE;
LANGS = Settings.LANGS;
IONIC_VER="3.7.1";
ANGULAR_VER="4.4.3";
RXJS_VER="5.4.3";

(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
	  'tslib': 'npm:tslib',
	  '@omneedia/app': 'npm:@omneedia/app',
	  '@types/node': 'npm:@types/node',
	  '@ngx-translate': 'npm:@ngx-translate',
      '@angular/core': 'npm:@angular/core@'+ANGULAR_VER+'/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@'+ANGULAR_VER+'/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@'+ANGULAR_VER+'/bundles/compiler.umd.js',
	  '@angular/common/http': 'npm:@angular/common@'+ANGULAR_VER+'/bundles/common-http.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@'+ANGULAR_VER+'/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@'+ANGULAR_VER+'/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@'+ANGULAR_VER+'/bundles/http.umd.js',
      '@angular/forms': 'npm:@angular/forms@'+ANGULAR_VER+'/bundles/forms.umd.js',
  	  '@ionic/storage': 'npm:@ionic/storage@2.0.1/es2015/index.js',
	  'localforage-cordovasqlitedriver': 'npm:localforage-cordovasqlitedriver@1.6.0/dist/localforage-cordovasqlitedriver.js',
	  'localforage': 'npm:localforage@1.5.0/dist/localforage.js',
      'ionic-angular': 'npm:ionic-angular@'+IONIC_VER,
      'rxjs': 'npm:rxjs@'+RXJS_VER,
      'ts': 'npm:plugin-typescript@7.1.0/lib/plugin.js',
      'typescript': 'npm:typescript@2.5.3/lib/typescript.js',
	  '@ionic-native/core': 'npm:@ionic-native/core/index.js',
	  '@ionic-native/globalization': 'npm:@ionic-native/globalization',
	  '@ionic-native/status-bar': 'npm:@ionic-native/status-bar',
	  '@ionic-native': 'npm:@ionic-native/core',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ionic-angular': {
        main: './umd/index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

function __loader__() {	
	System.import('/cdn/omneedia/app@Angular.js');
	System.import('app/main.ts');
};

__loader__();