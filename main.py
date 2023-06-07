import os 
from colorama import Back

#Main UI

def user_choice():

    print(Back.RED + "Total Price: ")
    print(total_price)

    print(Back.BLUE + "Food Choices: ")
    for starter in startersop:
        print(starter.title)
    for main in mainsop:
        print(main.title)
    for dessert in dessertsop:
        print(dessert.title)
    for snack in snacksop:
        print(snack.title)

    print(Back.BLACK + """
[1] Starter
[2] Main
[3] Dessert
[4] Snacks

[q] exit""")

    return input("> ")


def starter():
    startersop = input("Starter: ")
    startersop.append(startersop)


def main():
    mainsop = input("Main: ")
    mainsop.append(mainsop)

def dessert():
    dessertsop = input("Dessert: ")
    dessertsop.append(dessertsop)

def snack():
    snacksop = input("Snacks: ")
    snacksop.append(snacksop)


#Functions

total_price = 0

choice = []

startersop = []

mainsop = []

dessertsop =[]

snacksop = []

startprice = 0

mainprice = 0

dessertprice = 0

snackprice = 0

while choice != "q": #When "q" is not pressed, it continues to run the code below

    choice = user_choice()

    if choice == '1':
        starter()
    elif choice == '2':
        main()
    elif choice == '3':
        dessert()
    elif choice == '4':
        snack()
