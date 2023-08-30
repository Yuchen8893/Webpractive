import pandas as pd
df=pd.read_csv('TCU048.txt')
df=df.to_string().split()
t=df[0::5]
u=df[1::5]
n=df[2::5]
e=df[3::5]
for i in range(len(t)):
    ut=f'[{t[i]},{u[i]}]'
    u[i]=ut
for i in range(len(t)):
    ut=f'[{t[i]},{n[i]}]'
    n[i]=ut
for i in range(len(t)):
    ut=f'[{t[i]},{e[i]}]'
    e[i]=ut
output = ','.join(map(str, e))
print(output)