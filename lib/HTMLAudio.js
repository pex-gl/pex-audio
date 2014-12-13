function HTMLAudio(url) {
  this.audio = new Audio();
  this.audio.src = url;

  this.audio.onended = function() {
    this.playing = false;
  }.bind(this);

  Object.defineProperty(this, 'volume', {
    set: function(value) {
      this.audio.volume = value;
    },
    get: function() {
      return this.audio.volume;
    }
  });

  Object.defineProperty(this, 'isPlaying', {
    get: function() {
      return this.playing;
    }
  });

  Object.defineProperty(this, 'currentTime', {
    get: function() {
      return this.audio.currentTime;
    }
  });

  Object.defineProperty(this, 'duration', {
    get: function() {
      return this.audio.duration;
    }
  });

  Object.defineProperty(this, 'loop', {
    set: function(value) {
      this.audio.loop = value;
    },
    get: function() {
      return this.audio.loop;
    }
  });
}


HTMLAudio.prototype.play = function() {
  this.audio.play();
  this.playing = true;
}

HTMLAudio.prototype.pause = function() {
  this.audio.pause();
  this.playing = false;
}

module.exports = HTMLAudio;