require_relative "./Player.rb"
require_relative "./Display"
class HumanPlayer < Player
    def make_move(_board)
        start_pos, end_pos = nil, nil
        until start_pos && end_pos
            display.render
            if start_pos
                puts "#{color}'s turn"
                end_pos = display.cursor.get_input
                display.reset! if end_pos
            else  
                puts "#{color}'s turn"
                start_pos = display.cursor.get_input
                display.reset! if start_pos
            end  
        end 
        [start_pos,end_pos]

    end
end