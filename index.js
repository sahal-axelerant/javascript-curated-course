
function Stopwatch() {
    let duration = 0;
    let running = false;
    let start_time = 0;
    let stop_time = 0;
    this.start = function () {
        if (running) {
            console.error("Stopwatch has already started.");
            return;
        }
        running = true;
        start_time = new Date();
    }
    this.stop = function () {
        if (!running) {
            console.error("Stopwatch is not started.");
            return;
        }
        running = false;
        stop_time = new Date();
        let sec = (stop_time.getTime() - start_time.getTime()) / 1000;
        duration += sec;
    }
    this.reset = function () {
        duration = 0;
        running = false;
    }
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const stopwatch = new Stopwatch();
