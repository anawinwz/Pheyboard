import time
import random
seq = "abcdefghijklmnopqrstuvwxyz"
while True:
    s = random.choice(seq)
    for i in range(4):
       s+='\n'+random.choice(seq)
    f = open('data.txt','w').write(s)
    time.sleep(1)
