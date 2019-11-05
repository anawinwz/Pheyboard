import time
import random
seq = "abcdefghijklmnopqrstuvwxyz"
while True:
    s = random.choice(seq)+'\n'
    for i in range(3):
       s+=random.choice(seq)+'\n'
    f = open('data.txt','w').write(s)
    time.sleep(1)
