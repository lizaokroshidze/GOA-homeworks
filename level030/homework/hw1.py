    # 1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები 


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b


num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))


print("The sum of " + str(num1) + " and " + str(num2) + " is: " + str(add(num1, num2)))
print("The difference between " + str(num1) + " and " + str(num2) + " is: " + str(subtract(num1, num2)))
print("The product of " + str(num1) + " and " + str(num2) + " is: " + str(multiply(num1, num2)))
print("The division of " + str(num1) + " by " + str(num2) + " gives: " + str(divide(num1, num2)))