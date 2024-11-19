# 1-დან 100-მდე ლუწი რიცხვების ჯამი:


total_sum = 0
for i in range(1, 101):
    if i % 2 == 0:
        total_sum += i
print(total_sum)