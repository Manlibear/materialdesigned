# Contributing

### Code style
Regarding code style like indentation and whitespace, **follow the conventions you see used in the source already.**

## Modifying the code
First, ensure that you have the latest [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed.

Test that Grunt's CLI is installed by running `grunt --version`.  If the command isn't found, run `npm install -g grunt-cli`.  For more information about installing Grunt, see the [getting started guide](http://gruntjs.com/getting-started).

1. Fork and clone the repo.
1. Run `npm install` to install all dependencies (including Grunt).
1. Run `grunt` to grunt this project.
1. Run `grunt watch:js` to watch all changes in javascript files in the `js/src` folder.
1. Run `grunt watch:css` to watch all changes in scss files in the `css/sass` folder.

Assuming that you don't see any red, you're ready to go. Just be sure to run `grunt` after making any changes, to ensure that nothing is broken.

## Submitting pull requests

1. Create a new branch. You should not work in your `master` branch directly.
1. Fix stuff.
1. Test changes in actual browser in a custom tumblr blog (It is better if this blog is a secret one).
   1. If you can't test them, submit a pull request and I will do it for you.
1. Update the documentation to reflect any changes.
1. Push to your fork and submit a pull request.
