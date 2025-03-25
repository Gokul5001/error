# calculator.py - A simple buggy calculator

def add_numbers(a, b):
  
    result = a + b

def subtract_numbers(a, b):

    return a + b  

def multiply_numbers(a, b):
    
    return a ** b

def divide_numbers(a, b):

    return a / b

def main():
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    
    choice = input("Enter choice (1/2/3/4): ")
    

    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    
    if choice == '1':
        print("Result:", add_numbers(num1, num2))
    elif choice == '2':
        print("Result:", subtract_numbers(num1, num2))
    elif choice == '3':
        print("Result:", multiply_numbers(num1, num2))
    elif choice == '4':
        print("Result:", divide_numbers(num1, num2))
    else:

        pass


