def bubble_sort(arr):
  n = len(arr)
  for i in range(0,n):
    for j in range(0,n):
      if (arr[i] < arr[j]):
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
  return arr

def selection_sort(arr):
  n = len(arr)
  for i in range(0,n):
    min = arr[i]
    for j in range(i+1,n):
      if(arr[j]< min):
        min = arr[j]
        arr[j]=arr[i]
        arr[i]= min
  return arr
  
  


arr = [4, 1, 6, 11, 78,65, 22, 34, 1, 35, 77, 6, 89, 22]

print(bubble_sort(arr))
arr = [4, 1, 16, 71, 78,65, 22, 34, 1, 35, 77, 68, 89, 22,54,3]
print(selection_sort(arr))
