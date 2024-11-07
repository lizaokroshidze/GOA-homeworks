#დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else 


day_number = int(input("შეიყვანეთ რიცხვი 1- დან 7-მდე:"))

if day_number == 1 :
    print("ორშაბათი")
elif day_number == 2:
    print("სამშაბათი")
elif day_number == 3 :
    print("ოთხშაბათი")
elif day_number == 4 :
    print("ხუთშაბათი")
elif day_number == 5 :
    print("პარასკევი")
elif day_number == 6 :
    print("შაბათი")
elif day_number == 7 :
    print("კვირა")
else : 
    print("Error enter valid number")