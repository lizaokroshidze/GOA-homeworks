def get_count(sentence):
    vowels = 'aeiou'  # Rename this to 'vowels' for clarity
    return sum(1 for char in sentence if char in vowels)
