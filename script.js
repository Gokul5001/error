def add_numbers(a, b):
    return a + b

def subtract_numbers(a):
    return a - b  



def main():
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")

   
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

    else:
        print("Invalid operation")

if __name__ == "__main__":
    main()
