var fs = require('fs'),
	path = require('path'),
	colors = require('colors/safe'),
	stdin = process.stdin,
	stdout = process.stdout,
	args = process.argv.slice(2),
	cwd = process.cwd();
	
// set theme
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

console.log(colors.rainbow('Hello world !'));

stdin.setEncoding('utf8');
stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    stdout.write('data: ' + chunk);
    process.exit(0);
  }
});
stdin.on('end', function() {
  stdout.write('end');
});

process.on('exit', function(code) {
  console.log('About to exit with code:', code);
});
