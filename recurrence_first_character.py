input = ['!',2,5,'!',6,'a',8,'a',5,1,2,3,5,1,2,4]

def hash(inpList):
  i = -255
  hash =0
  j=0
  opList = []
  for i in inpList:
    hash = ( ord(str(i)) ) % len(inpList)
    print(i,hash)
    #print(hash)
    if(hash in opList):
      return i
    opList.append(hash)
    j=j+1
  return i
    
  

print(hash(input))
    
