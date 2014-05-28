var nunjucks = require('nunjucks');
var walk = require('walk');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var TEMPLATE_DIR = 'view';
var OUTPUT_DIR = 'www';

var writeFileP = function (file, data, callback) {
  mkdirp(path.dirname(file), function (err) {
    if (err) return callback(err);
    fs.writeFile(file, data, callback);
  });
};

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 1337,
          base: OUTPUT_DIR,
          hostname: '*',
          open: 'http://localhost:1337',
          livereload: true
        }
      }
    },
    watch: {
      snippets: {
        files: 'snippet/**',
        tasks: ['render']
      },
      views: {
        files: 'view/**',
        tasks: ['render']
      },
      html: {
        files: 'www/**',
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['render', 'connect', 'watch']);

  grunt.registerTask('render', function () {
    var done = this.async();
    var walker = walk.walk(TEMPLATE_DIR);
    walker.on('file', function (root, fileStats, next) {
      if (fileStats.name !== 'index.html') {
        next();
        return;
      }
      
      var filename = root + path.sep + fileStats.name;
      var rel = path.relative(TEMPLATE_DIR, filename);
      var output = OUTPUT_DIR + path.sep + rel;
      var relDir = path.dirname(rel);


      grunt.log.writeln('rendering: ' + filename);

      var result = nunjucks.render(filename, {
        path: relDir
      });
      writeFileP(output, result, function () {
        next();
      });
    });
    walker.on('end', function () {
      done();
    });
  });

  grunt.registerTask('build', ['render']);
};