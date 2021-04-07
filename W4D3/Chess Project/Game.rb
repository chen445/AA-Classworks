require_relative "./Board.rb"
require_relative "./HumanPlayer.rb"
class Game
    attr_reader :board, :display, :players
    def initialize
        @board = Board.new
        @display = display.new(board)
        @players = {
            white: HumanPlayer.new(:white,display)
            black: HumanPlayer.new(:black,display)
        }
        @current_player = :white
    end

    def play
        until board.checkmate?(current_player)
            begin  
            start_pos, end_pos = players[current_player].make_move(board)
            board.move_piece(current_player,start_pos,end_pos)
            swap_turn!
            notify_players
            rescue StandardError => e 
                @display.notify[:error] = e.messege
                retry 
            end
        end
        display.render
        puts "#{current_player} checkmate"
        nil
    end

    pravite
    def notify_players
        if board.check?(current_player)
            display.set_check!
        else  
            display.uncheck!
        end 
    end 

    def swap_turn!
        @current_player = current_player == :white ? :black : :white
    end 
end