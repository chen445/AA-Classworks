require_relative "-/Piece.rb"

class Knight < Piece

    POSSIBLE_MOVES = [
        [2,1],
        [2,-1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2],
        [-2,1],
        [-2,-1]
    ]
    include Stepable
    def symbol
        "#{Kn}"
    end

    protected
    
    def move_direction
       POSSIBLE_MOVES
    end
end