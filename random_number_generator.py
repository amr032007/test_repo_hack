import random


def generate_random_number(min_val=1, max_val=100):
    return random.randint(min_val, max_val)


if __name__ == "__main__":
    print("Random Number Generator")
    print("-----------------------")
    number = generate_random_number()
    print(f"Your random number (1-100): {number}")

    custom = input("\nGenerate with custom range? (y/n): ").strip().lower()
    if custom == "y":
        min_val = int(input("Enter min: "))
        max_val = int(input("Enter max: "))
        print(f"Your random number ({min_val}-{max_val}): {generate_random_number(min_val, max_val)}")
