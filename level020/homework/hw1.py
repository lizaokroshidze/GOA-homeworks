# 1) შექმენით სია რომელშიც იქნება 15 ელემენტი შემდეგ გამოიტანეთ სიის ყველა ელემენტი while loop-ის გამოყენებით და ასევე for loop-ითაც



my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

print("While loop-ის გამოყენებით:")
index = 0
while index < len(my_list):
    print(my_list[index])
    index += 1


print("for loop-ის გამოყენებით:")
for element in my_list:
    print(element)