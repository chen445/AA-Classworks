require_relative "-/Piece.rb"

class King < Piece
    POSSIBLE_MOVES = [
        [1,1],
        [0,1],
        [0,-1],
        [1,-1],
        [-1,-1],
        [-1,1],
        [1,0],
        [-1,0]
    ]
    include Stepable
    def symbol
        "#{symbol}"
    end

    protected
    def move_difference
        POSSIBLE_MOVES
    end
end