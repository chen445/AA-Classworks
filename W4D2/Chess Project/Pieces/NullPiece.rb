require "singleton"
require_relative "./Piece"
class NullPiece
    attr_reader :symbol
    include Singleton
    def initialize
        @symbol = " "
        @color = :none
    end 

    def empty?
        true 
    end 

    def move
        []
    end 
end