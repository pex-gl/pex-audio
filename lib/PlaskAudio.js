//Simple audio playback for Plask
//
//## Example use
//      var audio = new Audio("assets/test.mp3");
//      audio.play();
//      audio.volume = 0.5;

//## Reference
var AVPlayer = require('plask').AVPlayer;

//### Audio(file)
//`file` - audio file to play
function Audio(file) {
  this.audio = new AVPlayer();
  this.audio.appendFile(file);

  this._playing = false;
  this._loops = false;

  //### volume
  //set or get playback volue *{ Number }*
  Object.defineProperty(this, 'volume', {
    set: function(value) {
      this.audio.setVolume(value);
    },
    get: function() {
      return this.audio.volume();
    }
  });

  //### volume
  //returns true if audio is currently playing, false otherwise *{ Boolean }*
  Object.defineProperty(this, 'isPlaying', {
    get: function() {
      return this._playing;
    }
  });

  //### currentTime
  //returns current playback time in seconds  *{ Number }*
  Object.defineProperty(this, 'currentTime', {
    get: function() {
      return this.audio.currentTime();
    }
  });

  //### duration
  //returns total playback time in seconds  *{ Number }*
  Object.defineProperty(this, 'duration', {
    get: function() {
      return this.audio.duration();
    }
  });

  //### loop
  //set or get loop mode *{ Boolean }* = false
  Object.defineProperty(this, 'loop', {
    set: function(value) {
      this._loops = value;
      this.audio.setLoops(value);
    },
    get: function() {
      return this._loops;
    }
  });
}

//### play()
//start playing the file
Audio.prototype.play = function() {
  this.audio.play();
  this._playing = true;
}

//### pause()
//pause playback
Audio.prototype.pause = function() {
  throw 'Audio.pause - not implemented';
  this._playing = false;
}

module.exports = Audio;