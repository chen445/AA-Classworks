const Game = {
    randomPos(length, width) {
        let x = Math.floor(Math.random()) * length;
        let y = Math.floor(Math.random()) * width;
        return [x, y]
    },
};

module.exports = Game;
