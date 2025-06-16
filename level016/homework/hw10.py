#10) დაბეჭდეთ 1 დან 100 მდე დაბეჭდეთ მხოლოდ ის რიცხვები რომლებიც 3 ჯერადიც არის და 5 ჯერადიც


number = 1

while number <= 100:
    if number % 3 == 0 and number % 5 == 0:  
        print(number)
    number += 1