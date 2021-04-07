require_relative "-/Piece.rb"

class Bishop < Piece
    include Slideable
    def symbol
        "#{symbol}"
    end

    private
    def move_direction
       diagonal
    end
end