module Slideable
   private
   HORIZONTAL_DIRECTION = [
       [0,1],[0,-1],[1,0],[-1,0]
       ]

    DIAGONAL_DIRECTION = [
        [-1,-1],[-1,1][1,1][1,-1]
    ]
    def grow_unblocked_moves_in_dir(dx,dy)
        array = []
        current_pos = self.pos.dup
        while current_pos[0] >= 0 && current_pos[0] <= 7 && current_pos[1] >= 0 && current_pos[1] <= 7
            new_move = [current_pos[0] + dx],[current_pos[1] + dy]
            current_pos = new_move
            array << current_pos
        end
        array
    end

    def move 
        new_arr = []
        move_direction.each do |ele|
            new_arr += grow_unblocked_moves_in_dir(ele[0],ele[1])
        end
        return new_arr
    end      

    end

    #public 

    def horizontal
        HORIZONTAL_DIRECTION
    end

    def diagonal 
        DIAGONAL_DIRECTION
    end

    def move_direction
        self.move_direction
    end


end 