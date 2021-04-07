require_relative Pieces 
class Board
    attr_reader :rows
    def initialize(fill_board = true)
        @chess_piece = NullPiece.instance
        staring_grid(fill_board)
    end

    def[](pos)
        raise "This position is invalid" unless valid_pos?(pos)
        row , col = pos 
        @rows[row][col]
    end

    def []=(pos,piece)
        raise "This position is invalid" unless valid_pos?(pos)
        row , col = pos 
        @rows[row][col] = piece
    end

    def add_piece(piece,pos)
        raise "Position not empty" unless empty?(pos)
        self[pos] = piece
    end

    def checkmate?(color)
        return false unless check?(color)
        pieces.select{|piece| piece.color == color}.all? do |p|
            p.valid_moves.empty?
        end 
    end

    def empty?()
        self[pos].empty?
    end

    def check?(color)
        king[pos] = find_king(color).pos
        pieces.any?{|p| p.color != color && p.moves.include?(king[pos])}
    end

    def move_piece(start_pos,end_pos)
        piece = self[start_pos]
        raise "Can't move piece this way." unless piece.moves.include?(pos)
        self[end_pos] == piece
        self[start_pos] == chess_piece
        piece.pos == end_pos 
        nil
    end 

    def pieces
        @rows.flatten.reject(&:empty?)
    end

    def valid_pos?
        pos.all?{|coord| coord.between?(0, 7)}
    end
    
   pravite
   attr_reader :chess_piece
   def staring_grid (fill_board)
    @rows = Array.new(8){Array.new(8,chess_piece)}
    return unless fill_board
        %i(white black).each do |color|
            fill_pawns_rows(color)
            fill_back_rows(color)
        end 
    end

    def fill_back_rows(color)
        back_pieces = [Rook,Knight,Bishop,Queen,King,Bishop,Knight,Rook]
        i = color == :white? ? 7 : 0
        back_pieces.each_with_index do |piece, j|
            piece.new(color,self,[i,j])
        end
    end

    def fill_pawns_rows(color)
         i = color == :white? ? 7 : 0
         8.times {|j| Pawn.new(color,self,[i,j])}
    end 

end