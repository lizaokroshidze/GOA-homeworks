from collections import Counter

# List of ages
ages = [
    15, 15, 16, 16, 16, 16, 16, 16, 
    15, 17, 17, 17, 17, 19, 21, 21, 
    23, 25, 25, 26, 32
]

average_age = sum(ages) / len(ages)

age_counts = Counter(ages)
most_common_age = age_counts.most_common(1)[0]  

print("Average Age:", round(average_age, 2))
print("Most Common Age:", most_common_age[0], "(occurs", most_common_age[1], "times)")