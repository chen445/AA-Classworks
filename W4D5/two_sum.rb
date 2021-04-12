def bad_two_sum?(arr, target_sum)

    arr.each_with_index do |num1, idx1|
        arr.each_with_index do |num2, idx2|
            if num1 + num2 == target_sum && idx1 < idx2 
                return true 
            end
        end
    end
    false 
end


# arr = [0, 1, 5, 7] # 6
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false


def okay_two_sum?(arr, target_sum)
    i = 0 
    j = arr.length - 1 
    arr = arr.sort 

    while i < j 
        if arr[i] + arr[j] == target_sum 
            return true 
        elsif arr[i] + arr[j] > target_sum
            j -= 1 
        else 
            i += 1 
        end
    end
    false 
end

# arr = [0, 1, 5, 7]
# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

def hash_two_sum?(arr, target_sum)
    hash = Hash.new(0)

    arr.each do |ele|   
        hash[ele] += 1 
    end
    # hahs = {0=> 1, 1=>1, 5=> 1, 7=> 1}
    arr.each do |ele| # 0, 1, 5
        result = target_sum - ele # 10, # 9, #5 
        return true if hash.has_key?(result) && result != ele #10=>false, 9=> false, 5=>true
    end
    false 
end

arr = [0, 1, 5, 7]
p hash_two_sum?(arr, 6) # => should be true
p hash_two_sum?(arr, 10) # => should be false

