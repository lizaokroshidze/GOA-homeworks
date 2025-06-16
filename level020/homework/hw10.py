# 10) დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან




numbers = [-5, 2, -3, 8, -1, 6, -7, 4, -2, 10]

positive_sum = 0
negative_sum = 0

for num in numbers:
    if num > 0:  
        positive_sum += num
    elif num < 0:  
        negative_sum += num

print("დადებითი რიცხვების ჯამი:", positive_sum)
print("უარყოფითი რიცხვების ჯამი:", negative_sum)