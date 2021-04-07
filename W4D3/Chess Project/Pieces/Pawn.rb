require_relative "-/Piece.rb"

class Pawn < Piece

def symbol
    "#{P}"
end

def moves
 forward_steps+side_attacks
end

private

def at_start_row?
    pos[0] == (color == :white) ? 7 : 0
end

def forward_dir
    color == :white -1 : 1 
end

def forward_steps
    row , col  = pos 
    step = [row+forward_dir, col]
    return [] unless board.valid_pos?(step) && board.empty?(step)
    steps = [step]
    two_steps = [row+2*forward_dir, col]
    steps << two_steps if at_start_row? && board.empty?(steps)
    return steps
end

def side_attacks
    row , col = pos 
    attacks = [[row+forward_dir, col-1],[row+forward_dir, col+1]]
    attacks.select do |new_pos|
        next false unless board.valid_pos?(new_pos)
        next false if board.empty?(new_pos)
        

    attacked_piece = board[new_pos]
    return attacked_piece && attacked_piece.color != color
    end 
end

end 