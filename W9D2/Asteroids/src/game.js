const Game = {
    randomPos(length, width) {
        let x = Math.floor.random() * length;
        let y = Math.floor.random() * width;
        return [x, y]
    },
};

module.export = Game;
