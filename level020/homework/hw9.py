# 9) შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 



numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


even_sum = 0
odd_sum = 0

for num in numbers:
    if num % 2 == 0:  
        even_sum += num
    else: 
        odd_sum += num

print("ლუწი რიცხვების ჯამი:", even_sum)
print("კენტი რიცხვების ჯამი:", odd_sum)