# 5) შექმენით სია სადაც გექნებათ  ყველა მონაცემთა ტიპის მქონე ელემენტები  შემდეგ for loop ით შეუმოწმებთ მონაცემთა ტიპებს და გამოიტანთ მხოლოდ სტრინგ ტიპის ელემენტებს  




mixed_list = [42, "გამარჯობა", 3.14, True, None, {"key": "value"}, [1, 2, 3], (4, 5), "!", 7+3j]


for element in mixed_list:
    if type(element) == str:  
        print(element)