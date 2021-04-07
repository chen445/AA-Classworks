module Stepable
    def move 
        new_arr = []
        pos = self.pos.dup
        move_difference.each do |ele|
            new_arr += [[ele[0] + pos[0]],[[ele[1] + pos[1]]]
        end
        return new_arr
    end      

    private
    def move_difference
        self.move_difference
    end
    end

    
    
end