# გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე


import random

def generate_teams(students, team_size):
    random.shuffle(students)
    
    teams = [students[i:i + team_size] for i in range(0, len(students), team_size)]
    
    return teams


students_list = ["Apple", "Peach", "Banana", "Pear", "Mango", "Kiwi", "Orange", "Plum", "Pineapple", "Strawberry"]


team_size = 3


teams = generate_teams(students_list, team_size)


for i, team in enumerate(teams, start=1):
    print(f"გუნდი {i}: {team}")