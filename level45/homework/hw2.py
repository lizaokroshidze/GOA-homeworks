def small_enough(array, limit):
    return all(value <= limit for value in array)