# Given an array, and a window size w, find the maximum range (max - min) within a set of w elements.

# Let's say we are given the array [1, 2, 3, 5] and a window size of 3. Here, there are only two cases to consider:

# 1. [1 2 3] 5
# 2. 1 [2 3 5]
# In the first case, the difference between the max and min elements of the window is two (3 - 1 == 2). In the second case, that difference is three (5 - 2 == 3). We want to write a function that will return the larger of these two differences.


def windowed_max_range(array,window_size)
    current_max_range = nil  #4


end


# windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8