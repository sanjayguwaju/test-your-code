# Define a list of student dictionaries
students = [
  { 'name': 'Alice', 'grade': 85 },
  { 'name': 'Bob', 'grade': 92 },
  { 'name': 'Charlie', 'grade': 88 }
]

# Define a function to calculate the average grade
def calculate_average_grade(students):
  total_grade = 0
  for student in students:
    total_grade += student['grade']
  return total_grade / len(students)

# Use the function
average_grade = calculate_average_grade(students)
print(f'The average grade is {average_grade}.')