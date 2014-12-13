var AVPlayer = require('plask').AVPlayer;

function PlaskAudio(url) {
  this.audio = new AVPlayer();
  this.audio.appendFile(url);

  this._playing = false;
  this._loops = false;

  //FIXME: remote audio props listing
  console.log(Object.keys(this.audio));

  Object.defineProperty(this, 'volume', {
    set: function(value) {
      this.audio.setVolume(value);
    },
    get: function() {
      return this.audio.volume();
    }
  });

  Object.defineProperty(this, 'isPlaying', {
    get: function() {
      return this._playing;
    }
  });

  Object.defineProperty(this, 'currentTime', {
    get: function() {
      return this.audio.currentTime();
    }
  });

  Object.defineProperty(this, 'duration', {
    get: function() {
      return this.audio.duration();
    }
  });

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

PlaskAudio.prototype.play = function() {
  this.audio.play();
  this._playing = true;
}

PlaskAudio.prototype.pause = function() {
  //this.audio.pause();
  throw 'PlaskAudio.pause - not implemented';
  this._playing = false;
}

module.exports = PlaskAudio;