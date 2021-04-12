# Write a method #first_anagram? that will generate and store all the possible anagrams of the first string.
# Check if the second string is one of these.
def first_anagram?(str1,str2) #O(n!)
    arr = str1.split("").permutation.to_a
    arr.join("").include?(str2)
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str1,str2)
    i = 0 
    while i < str1.length
        if str2.index(str1[i]) != nil 
            idx= str2.index(str1[i])
            str2.delete!(str2[idx])
        end 
        i+=1
    end
    str2.empty? ? true : false 
end
    
    # str1.each_char.with_index do |char, i|
    #     if str2.index(char) != nil
    #         str_idx=str2.index(char)
    #          str2.delete!(str2[str_idx])
    #     end
    # end
    # if str2.empty?
    #     return true 
    # else  
    #     return false
    # end 
# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")

# Write a method #third_anagram? that solves the problem by sorting both strings alphabetically. 
# The strings are then anagrams if and only if the sorted versions are the identical.
# What is the time complexity of this solution? Is it better or worse than #second_anagram??

def third_anagram?(str1, str2)
    str1 = str1.split("").sort 
    str2 = str2.split("").sort
    str1 == str2 
    
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true






# Write a method #second_anagram? that iterates over the first string. 
# For each letter in the first string, find the index of that letter in the second string (hint: use Array#find_index) and delete at that index. 
# The two strings are anagrams if an index is found for every letter and the second string is empty at the end of the iteration.


def fourth_anagram?(str1, str2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)

    str1.each_char do |char|
        hash1[char] += 1 
    end
    str2.each_char do |char|
        hash2[char] += 1 
    end
    hash1 == hash2 

end

def fourth_anagram2?(str1, str2)
    create_hash(str1) == create_hash(str2)

end

def create_hash(word)
    hash = Hash.new(0)

    word.each_char do |char|
        hash[char] += 1 
    end
    hash 

end

p fourth_anagram2?("gizmo", "sally")    #=> false
p fourth_anagram2?("elvis", "lives")    #=> true