# require 'byebug'
def my_uniq(arr)
    new_arr=[]
    arr.each do |el|
        if !new_arr.include?(el)
            new_arr << el 
        end 
    end 
    return new_arr
end

class Array 
    def two_sum
        new_arr = []
        self.each_with_index do |el,i|
            self.each_with_index do |el2, j|
                if j > i    
                    if el+el2 == 0 
                        new_arr << [i,j]
                    end 
                end 
            end 
        end
        return new_arr
    end

    def my_transpose
        result = Array.new(self[0].length) {Array.new(self.length)}
        self.each_with_index do |row, i|
            row.each_with_index do |col, j|
                result[j][i] = self[i][j]
            end
        end
        result
    end
end

def stock_picker(arr)
    most_profitable_pair = []
    maximum = 0
    arr.each_with_index do |price, i|
        arr.each_with_index do |price2, j|
            if j > i 
                if (price2 - price).abs > maximum
                    maximum = (price2 - price).abs
                    most_profitable_pair = [price,price2]
                end
            end
        end
    end
    most_profitable_pair
end

class Towers
    attr_reader :discs, :won
    attr_accessor :piles
    def initialize
        @piles = Array.new(3){Array.new}
        @discs = [1,2,3,4,5]
        @piles[0] = @discs
        @won = false
    end  

    def ask_user
        # until @won == true
            puts "inputs two numbers with comma "
            response= gets.chomp.split(",")
            new_arr =[]
            response.each do |el|
                new_arr << el.to_i
            end
        return new_arr
    end

    def [](pos)
        x,y = pos
        @piles[x][y]
    end

   

    def move
       pos = ask_user
       first = pos[0]
       second = pos[1]

       if self[[first,0]] < self[[second,0]] && !self[first].empty?
            self[second]<< self[[first,0]].shift
       else 
            raise "Invaid Position"
       end 
    end 

    def won?
        pos = self.ask_user
        x,y = pos
        if @piles[x].empty? && @piles[y] == @discs
            won = true 
        else 
            won =  false 
        end
    end
end

# p game = Towers.new

# game.move
