#List 

    #1) შექმენით სია რომელშიც გექნებათ 1 დან 20-მდე რიცხვები დაბეჭდეთ თითოეული სიის ელემენტი და თითოეულ მათგანს მიუწერეთ ლუწია თუ კენტი, გამოიყენეთ for loop


numbers = list(range(1, 21))

for number in numbers:
    if number % 2 == 0:
        print(str(number) + " - ლუწი")
    else:
        print(str(number) + " - კენტი")