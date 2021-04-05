require_relative "./00_tree_node.rb"
class KnightPathFinder
    attr_reader :considered_positions , :root_node
    def initialize(pos)
        @root_node = PolyTreeNode.new(pos)
        @considered_positions =[pos]
    end 

    def self.valid_moves(pos)
        x, y = pos
        possible_move=[[x+2,y+1],[x+2,y-1],[x+1,y-2],[x+1,y+2],[x-1,y+2],[x-2,y+1],[x-1,y-2],[x-2,y-1]]
        return possible_move.select{|sub_arr| sub_arr[0]>=0 && sub_arr[0]<8 && sub_arr[1]>=0 && sub_arr[1]<8}
    end

    def new_move_positions(pos)
        new_arr =[]
        KnightPathFinder.valid_moves(pos).each do |sub_arr|
            if !@considered_positions.include?(sub_arr)
                @considered_positions << sub_arr
                new_arr << sub_arr
            end 
        end 
        return new_arr     
    end

    def build_move_tree
        queue=[self.root_node]
        until queue.empty?
            el = queue.shift
            moves = new_move_positions(el.value)
            moves.each do |move|
                node = PolyTreeNode.new(move)
                queue << node
                el.add_child(node)
            end 
        end 
    end

    def find_path(end_pos)
         node=self.root_node.bfs(end_pos)
         self.trace_path_back(node)
    end

    def trace_path_back(node)
        new_arr=[]
        while node != nil 
            new_arr.unshift(node.value)
            node = node.parent
        end 
        return new_arr
    end
    
end

knight = KnightPathFinder.new([0,0])
knight.build_move_tree
p knight.considered_positions.length

p knight.find_path([7,6])

p knight.find_path([6,7])

p knight.find_path([6,2])
