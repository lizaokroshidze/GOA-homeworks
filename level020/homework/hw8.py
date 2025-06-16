# 8) გამოითვალეთ საშუალო არითმეტიკული რიცხვების სიიდან



numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

total_sum = 0
count = 0

for num in numbers:
    total_sum += num  
    count += 1

average = total_sum / count


print("საშუალო არითმეტიკული:", average)