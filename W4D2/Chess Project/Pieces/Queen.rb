require_relative "-/Piece.rb"

class Queen < Piece
    include Slideable
    def symbol
        "#{symbol}"
    end

    private
    def move_direction
        horizontal + diagonal
    end
end