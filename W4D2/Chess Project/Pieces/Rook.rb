require_relative "-/Piece.rb"

class Rook < Piece
    include Slideable
    def symbol
        "#{symbol}"
    end

    private
    def move_direction
        horizontal
    end
end