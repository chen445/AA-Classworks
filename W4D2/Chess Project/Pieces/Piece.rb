class Piece
    attr_reader :board, color
    def initialize(color,board,pos)
        @color= color
        @board= board
        @pos = pos
    end

    def to_s
        "#{symbol}"
    end

    def empty?
        false 
    end 

    def symbol
        raise NotImplementedError
    end

    def valid_move
        moves.reject do |end_pos|
            move_into_check?(end_pos)
        end
    end

    pravite

    def move_into_check?(end_pos)
        t_board = board.dup
        t_board.move_piece!(pos,end_pos)
        t_board.check?(color)
    end
end 