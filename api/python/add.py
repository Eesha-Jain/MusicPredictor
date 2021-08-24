import sys
from csv import writer

l = [sys.argv[1], sys.argv[2]]

with open('music.csv', 'a', newline='\n') as f_object:
    writer_object = writer(f_object)
    writer_object.writerow(l)
    f_object.close()

print("completed")