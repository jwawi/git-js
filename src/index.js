
var Git = require('./git');

//var ChildProcess = require('child_process');
var CrossSpawn = {spawn: require('cross-spawn')};
var Buffer = require('buffer').Buffer;

module.exports = function (baseDir) {
    return new Git(baseDir || process.cwd(), CrossSpawn, Buffer);
};

