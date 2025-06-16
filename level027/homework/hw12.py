#2) შექმენით სია რომელშიც გექნებათ 1 დან 20მდე რიცხვები შემდეგ კი დაბეჭდეთ 3 ის ჯერადი რიცხვები


numbers = list(range(1, 21))

for number in numbers:
    if number % 3 == 0:
        print(number)