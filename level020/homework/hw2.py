# 2) მომხმარებელს შეეკითხეთ სახელი შემდეგ დაბეჭდეთ ამ სახელის მესამე ასო

name = input("Enter your name: ")
if len(name) >= 3:
    print("The third letter of your name is:", name[2])
else:
    print("Your name should be at least 3 characters.")