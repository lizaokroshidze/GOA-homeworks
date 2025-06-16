#შექმენით სია რომელშიც იქნება მოთავსებული რენდომ რიცხვები შემდეგ კი ამ სიიდან ამოშალეთ ყველა ლუწი რიცხვი



random_numbers = [33,44,65,84,39,49,384,384,992,39,40,2]
print(random_numbers)

odd_numbers = [num for num in random_numbers if num % 2 != 0]

print(odd_numbers)