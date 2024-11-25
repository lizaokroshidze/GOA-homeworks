#python - შექმენით რიცხვებით სავსე სია შემდეგ კი შექმენით პროგრამა რომელიც დაგვიბეჭდავს ამ სიიდან უდიდესს, გაიხსენეთ ბატონი ნიკას მოცემული დავალება გამოგადგებათ



numbers = [3, 45, 12, 78, 23, 56, 89, 2]

max_number = numbers[0]

for number in numbers:
    if number > max_number: 
        max_number = number  


print(max_number)