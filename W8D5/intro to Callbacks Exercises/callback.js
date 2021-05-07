class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let [hour,minute,second]=new Date().toLocaleTimeString("en-US").split(/:| /)
    this.hour=hour;
    this.minute = minute;
    this.second = second;
    this.printTime()
    setInterval(this._tick(), 1000);
  }


  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minute}:${this.second}`)
  }

  _tick(callback) {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.second++;
    this.printTime();
  }
}

const clock = new Clock();
