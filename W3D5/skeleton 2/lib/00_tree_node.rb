class PolyTreeNode
    attr_reader :children, :parent , :value
    attr_writer :parent
    def initialize(value)
        @children = []
        @parent = nil
        @value = value
    end

    def parent=(node)       # node2.parent=(node1= 'root')
        if node == nil
            @parent = nil 
        else  
            if @parent != nil
                @parent.children.delete(self)   # node2.parent
            end
            @parent = node
            node.children << self if !node.children.include?(self)
        end 
    end

    def add_child(child_node)       # node2  == self .add_children(node3)
        if !self.children.include?(child_node)
            child_node.parent=(self)
        end
    end

    def remove_child(child_node)        #node2.remove_child(node3)
        if !self.children.include?(child_node)
        raise "Node is not a child"
        end
        child_node.parent=(nil)
    end



    
    def dfs(target_value)
        return self if self.value == target_value
         
        self.children.each do |child|
            result = child.dfs(target_value)
            if result != nil
                return result
            end
        end
        nil
    end


end