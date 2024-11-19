#4) შექმენით სია რომელშიც იქნება რენდომ რიცხვები მოთავსებული შემდეგ კი შექმენით მეორე სია რომელშიც გადაიტანთ პირველი სიიდან მხოლოდ ლუწ რიცხვებს

random_numbers = [11, 22, 44, 33, 84, 76, 55, 80, 50, 69]

even_numbers = []

for num in random_numbers:
    if num % 2 == 0:  
        even_numbers.append(num)  

print(even_numbers)  