#შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში



names = ["Tom", "Jerry", "Tina", "Bob", "Alice", "Tim", "Charlie", "Ted", "Anna"]

filtered_names = []

for name in names:
    if name.lower()[0] != 't':  
        filtered_names.append(name)  

print("სახელები 't'-ზე დაწყების გარეშე:", filtered_names)
