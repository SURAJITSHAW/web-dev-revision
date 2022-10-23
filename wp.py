import pyautogui as spam 
import time

i = 0

time.sleep(5)

while i <= 99:

    spam.typewrite("more jabo, jate tui valo thakis " + str(i+1) )
    spam.press('Enter')
    i+=1