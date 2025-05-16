
print(True and True)    # True
print(True and False)   # False
print(False and True)   # False
print(False and False)  # False

print(True or True)     # True
print(True or False)    # True
print(False or True)    # True
print(False or False)   # False

# მაგალითები and-ით:

print(5 > 3 and 10 == 10)     # True and True - True
print(5 > 3 and 10 != 10)     # True and False - False
print(5 < 3 and 10 == 10)     # False and True - False
print(5 < 3 and 10 != 10)     # False and False - False

# მაგალითები or-ით:

print(5 > 3 or 10 == 10)      # True or True - True
print(5 > 3 or 10 != 10)      # True or False - True
print(5 < 3 or 10 == 10)      # False or True - True
print(5 < 3 or 10 != 10)      # False or False - False


a = 7
b = 12

print(a < 10 and b > 10)      # True and True - True
print(a == b or a != 7)       # False or False - False