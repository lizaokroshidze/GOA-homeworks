# 3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი



def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "odd"
    

num = int(input("enter a number: "))
result = even_or_odd (num)


print("The number you entered" +" "+str(num) + " " + "is" +" "+ result)
