//Simple audio playback for the browser
//
//## Example use
//      var audio = new Audio("assets/test.mp3");
//      audio.play();
//      audio.volume = 0.5;

//## Reference

//### Audio(file)
//`file` - audio file to play
function Audio(url) {
  this.audio = new window.Audio();
  this.audio.src = url;

  this.audio.onended = function() {
    this.playing = false;
  }.bind(this);

  //### volume
  //set or get playback volue *{ Number }*
  Object.defineProperty(this, 'volume', {
    set: function(value) {
      this.audio.volume = value;
    },
    get: function() {
      return this.audio.volume;
    }
  });

  //### volume
  //returns true if audio is currently playing, false otherwise *{ Boolean }*
  Object.defineProperty(this, 'isPlaying', {
    get: function() {
      return this.playing;
    }
  });

  //### currentTime
  //returns current playback time in seconds  *{ Number }*
  Object.defineProperty(this, 'currentTime', {
    set: function(time) {
      this.audio.currentTime = time;
    },
    get: function() {
      return this.audio.currentTime;
    }
  });

  //### duration
  //returns total playback time in seconds  *{ Number }*
  Object.defineProperty(this, 'duration', {
    get: function() {
      return this.audio.duration;
    }
  });

  //### loop
  //set or get loop mode *{ Boolean }* = false
  Object.defineProperty(this, 'loop', {
    set: function(value) {
      this.audio.loop = value;
    },
    get: function() {
      return this.audio.loop;
    }
  });
}

//### play()
//start playing the file
Audio.prototype.play = function() {
  this.audio.play();
  this.playing = true;
}

//### pause()
//pause playback
Audio.prototype.pause = function() {
  this.audio.pause();
  this.playing = false;
}

module.exports = Audio;