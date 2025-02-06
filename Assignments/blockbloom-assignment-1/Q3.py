import hashlib
import time

def fn(inp, t='000'):
    st = time.time()
    n = 0
    
    while True:
        s = inp + str(n)
        r = hashlib.sha256(s.encode()).hexdigest()
        if r.startswith(t):
            et = time.time()
            return {
                'n': n,
                'tt': et - st
            }
        
        n += 1


inp = input("Enter string: ")
res= fn(inp)
print(f"Nonce: {res['n']}")
print(f"Time taken: {res['tt']:.4f} seconds")