def add_numbers(a, b):
    # Fixed: Added return statement
    return a + b

def subtract_numbers(a):
    # Fixed: Corrected the operation to subtraction
    return a - b  

def multiply_numbers(a, b):
    # Fixed: Changed to multiplication operator
    return a * b

def divide_numbers(a, b):
    # Fixed: Added check for division by zero
    if b == 0:
        return "Error! Division by zero."
    return a / b

def main():
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
   
    while True:
        choice = input("Enter choice (1/2/3/4): ")
        if choice in ('1', '2', '3', '4'):
            break
        print("Invalid input. Please enter 1, 2, 3, or 4.")
   
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input. Please enter numbers only.")
        return
   
    if choice == '1':
        print("Result:", add_numbers(num1, num2))
    elif choice == '2':
        print("Result:", subtract_numbers(num1, num2))
    elif choice == '3':
        print("Result:", multiply_numbers(num1, num2))
    elif choice == '4':
        result = divide_numbers(num1, num2)
        print("Result:", result)
    else:
        # This shouldn't happen now due to input validation
        print("Invalid operation")

# Fixed: Added the main() function call
if __name__ == "__main__":
    main()
