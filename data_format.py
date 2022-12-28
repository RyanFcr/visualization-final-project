f1 = open('./data/runnerupsdata.csv', 'r')
f2 = open('final.txt', 'a')
firstline = f1.readline()
att_name = firstline.split(',')
# f2.write('[\'Date\',\'FG3A\'],\n')
for line in f1.readlines()[::]:
    token = line.split(',')
    sdate = token[att_name.index('TPA')]
    # f2.write('\"')
    f2.write(sdate+',')
    # f2.write(token[att_name.index('FG3A')])
    # f2.write('],\n')
    # line = f1.readline()
f2.write('\n')