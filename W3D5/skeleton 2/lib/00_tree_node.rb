class PolyTreeNode
    attr_reader :children, :parent , :value
    attr_writer :parent
    def initialize(value)
        @children = []
        @parent = nil
        @value = value
    end

    def parent=(node)
        if node == nil
            @parent = nil 
        else  
            if @parent != nil
                @parent.children.delete(self)
            end
            @parent = node
            node.children << self if !node.children.include?(self)
        end 
    end
end