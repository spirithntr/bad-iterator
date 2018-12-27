export default function Iterator(array, config) {
  this.array = array;
  this.windowStart = 0;
  this.windowWidth = typeof (config.width) === 'number' ? config.width : 1;
  console.log(this.windowWidth)
  this.windowEnd = this.windowStart + this.windowWidth;
  this.config = config;
}
Iterator.prototype.forward = function () {
  // moves iteration window forward and returns sub-array of current values
  if (!this.config.windowTransform) {
    this.windowStart++;
    this.windowEnd++;
  } else {
    console.log('start:', this.windowStart, 'end:', this.windowEnd)
    let newWindow = this.config.windowTransform(this.windowStart, this.windowEnd);
    if (typeof(newWindow.newStart) === 'number' && typeof(newWindow.newEnd) === 'number') {
      this.windowStart = newWindow.newStart;
      this.windowEnd = newWindow.newEnd;
      this.windowWidth = this.windowEnd - this.windowStart;
    }
  }
  console.log('start:', this.windowStart, 'end:', this.windowEnd)
  return this.current();
}
Iterator.prototype.backward = function () {
  // moves iteration window backward and returns sub-array of current values
  if (!this.config.windowTransform) {
    this.windowStart--;
    this.windowEnd--;
  } else {
    //lets just believe windowTransform won't change start and end to a different width :S
    let newWindow = this.config.windowTransform(this.windowStart, this.windowEnd);
    if (typeof (newWindow.newStart) === 'number' && typeof (newWindow.newEnd) === 'number') {
      let difStart = this.windowStart - newWindow.newStart;
      let difEnd = this.windowEnd - newWindow.newEnd;
      this.windowStart += difStart;
      this.windowEnd += difEnd;
      this.windowWidth = this.windowEnd - this.windowStart;
    }
    console.log("start:", this.windowStart, "end:", this.windowEnd);
  }
  console.log("start:", this.windowStart, "end:", this.windowEnd);
  return this.current();
}
Iterator.prototype.current = function () {
  // returns sub-array of current values
  if (!this.config.cyclic) {
    return this.array.slice(this.windowStart, this.windowEnd);
  } else {
    if (this.windowStart < 0) {
      return this.array.slice(this.windowStart % this.array.length, this.windowEnd).concat(
        this.array.slice(0,this.windowEnd)
      );
    }
  }
}
Iterator.prototype.jumpTo = function (i) {
  this.windowStart = i;
  this.windowEnd = this.windowWidth + this.windowStart;
  // moves iteration window to i'th posiiton (don't return values)
}

