# 1) შექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია

names = []

name_list = ["John", "Dean", "Sam", "Bob", "castiel", "Eve"]

for name in name_list:
    if len(name) < 4:
        names.append(name)

print(names) 