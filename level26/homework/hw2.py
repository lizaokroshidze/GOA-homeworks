# შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია 
names = ["ლიზა", "ინა", "ლიზა", "ანა", "ლიზა"]
your_name = "ლიზა"

count = 0
for name in names:
    if name == your_name:
        count += 1

print("თქვენი სახელი სიაში მეორდება",count,"ჯერ.")