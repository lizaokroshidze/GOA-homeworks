#3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.



num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))


number1 = 0  
number2 = 1  


for i in range(num1, num2 + 1):  
    number1 += i  
    number2 *= i  

print("ჯამი:", number1, "ნამრავლი:", number2)
