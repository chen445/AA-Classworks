# my_min 

# Given a list of integers find the smallest number in the list.

# Example:

def my_min(list)
    list.each do |ele|
        if list.all? { |ele_2| ele_2 >= ele }
            return ele
        end 
    end
    false 
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

# Phase 1 
# First, write a function that compares each element to every other element of the list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?

# Phase II
# Now rewrite the function to iterate through the list just once while keeping track of the minimum. What is the time complexity?

def my_min2(list)
    min = list[0]
    list.each do |ele|
        if ele < min 
            min = ele 
        end
    end
    min 
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min2(list)  # =>  -5





# Largest Contiguous Sub-sum

# You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. 
# Find the sums of all contiguous sub-arrays and return the max.

# Example:

def largest_contiguous_subsum(list)
    sub_sum = [] # n^2 == nested loop 
    max_sub_sum = 0
    (0...list.length).each do |i|
        (i...list.length).each do |j|
            sub_sum << list[i..j]
        end
    end
    sub_sum.each do |subarr|
        if subarr.sum > max_sub_sum
            max_sub_sum = subarr.sum 
        end
    end
    max_sub_sum
end


def largest_contiguous_subsum2(list)
    # two vars. one tracking largest sum so far, the other is tracking the current some. 
    largest_sum = list[0] # -5
    current_sum = list[0] # -5 
    i = 1 # [-5, -1, -3]
    while i < list.length # -1 > -6                         true        false 
        current_sum = (list[i] > current_sum + list[i]) ? list[i] : current_sum + list[i] # -1 
        largest_sum = (largest_sum > current_sum) ? largest_sum : current_sum # 
        i += 1              # -5   >     -1 
    end
    largest_sum
end




list = [5, 3, -7]
p largest_contiguous_subsum2(list) # => 8

#     # possible sub-sums
#     [5]           # => 5
#     [5, 3]        # => 8 --> we want this one
#     [5, 3, -7]    # => 1
#     [3]           # => 3
#     [3, -7]       # => -4
#     [-7]          # => -7

#     # Example 2:


list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum2(list) # => 8 (from [7, -6, 7])


    # Example 3:


list = [-5, -1, -3]
p largest_contiguous_subsum2(list) # => -1 (from [-1])

    # Phase I

    # Write a function that iterates through the array and finds all sub-arrays using nested loops. 
    # First make an array to hold all sub-arrays. Then find the sums of each sub-array and return the max.

    # Discuss the time complexity of this solution.

    # Phase II

    # Let's make a better version. Write a new function using O(n) time with O(1) memory. 
    # Keep a running tally of the largest sum. To accomplish this efficient space complexity, consider using two variables. 
    # One variable should track the largest sum so far and another to track the current sum. We'll leave the rest to you.

