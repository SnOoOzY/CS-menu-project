import os 
from colorama import Back

#Main UI

def user_choice():

    print(Back.RED + "Total Price: ")
    print(total_price)

    print(Back.BLUE + "Food Choices: ")
    print(food_choice)

    print(Back.BLACK + """
[1] Starter
[2] Main
[3] Dessert
[4] Snacks

[q] exit""")

    return input("> ")


def starters():
    input("Starter: ")  #User inputs starter
    starterschoice.append(food_choice)


def mains():
    input("Main: ") #User inputs main
    mains.append(food_choice)

def dessert():
    input("Dessert: ") #User inputs dessert
    dessert.append(food_choice)

def snacks():
    input("Snacks: ") #User inputs snacks
    snacks.append(food_choice)


#Functions

total_price = []

choice = []

food_choice = []

while choice != "q": #When "q" is not pressed, it continues to run the code below

    choice = user_choice()

    if choice == '1':
        starters()
    elif choice == '2':
        mains()
    elif choice == '3':
        dessert()
    elif choice == '4':
        snacks()

#Food pricing

#Starter prices

tomato_soup = 2.00
french_onion_soup = 2.50
tomato_salad = 2.90
chicken_salad = 3.30

#Main prices

german_sausage = 6.50
grilled_fish = 6.25
pizza = 4.85
thai_chicken = 5.95
veg_pasta = 4.85
roast_chicken = 5.95

#Dessert prices

fruit_salad = 2.25
ice_cream = 2.00
lemon_cake = 2.25
chocolate_cake = 2.25
biscuits = 2.50

#Drink prices

water = 1.00
orange_juice = 1.25
soft_drinks = 1.30
tea = 0.90
irish_coffee = 0.90

#Snack prices

cheese_burger = 3.20
veg_omelette = 3.25
cheese_tomato_sandwich = 3.25
burger = 2.90
chicken_sandwich = 3.50
cheese_omelette = 3.50

#Food price appending

