# 7) შექმენით ახალი სია მხოლოდ ლუწი რიცხვების ერთი დიდი სიიდან 



big_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

even_numbers = [num for num in big_list if num % 2 == 0]

print("ლუწი რიცხვები:", even_numbers)