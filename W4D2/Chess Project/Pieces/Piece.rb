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
        
    end

    def valid_move
    
    end
end 