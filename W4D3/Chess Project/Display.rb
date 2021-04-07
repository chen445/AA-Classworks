require "colorize"
require_relative "./Cursor.rb"
class Display
    attr_reader :board , :cursor, :notify
    def initialize(board)
        @board = board
        @cursor = Cursor.new([0,0], board)
        @notify = {}
    end 

    def build_grid
        @board.rows.map_with_index{|row,i| build_row(row,i)}
    end 

    def build_row(row,i)
        row.map_with_index do |piece, j|
            colors = colors_for(i,j)
            piece.to_s.colorize(color)
        end 
    end

    def colors_for(i,j)
        if cursor.cursor_pos == [i,j] && cursor.selected
            bgc = :light_blue
        elsif  cursor.cursor_pos == [i,j]
            bgc = :light_red
        elsif  (i+j).odd?
            bgc = :light_yellow
        else   
            bgc = :light_green
        end 
        { background: bgc}
    end

    def render 
        build_grid.each do |row|
        puts row.join("")
        end 
    end 

    def reset
        @notify.delete(:error)
    end 

    def uncheck!
        @notify.delete(:check)
    end 

    def set_check!
        @notify[:check] = "check"
    end
end