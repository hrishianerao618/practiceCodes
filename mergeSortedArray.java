
class Main {

  public static int[] mergeArr(int[] arr1, int[] arr2) {
    int i = 0, j = 0, k=0;
    int totalLength = arr1.length + arr2.length;
    int[] arr3 = new int[totalLength];

    while (i < arr1.length && j < arr2.length) {
      if(arr1[i]<= arr2[j]){
        arr3[k] = arr1[i];
        i++;
        k++;
      }else if(arr1[i] > arr2[j]){
        arr3[k] = arr2[j];
        j++;
        k++;
      }
    }

    while(i< arr1.length){
      arr3[k] = arr1[i];
        i++;
        k++;
    }
    while(j< arr2.length){
      arr3[k] = arr2[j];
        j++;
        k++;
    }
        
    return arr3;
  }

  public static void main(String[] args) {
    int[] arr1 = { 1, 5, 8, 10, 14,30 };
    int[] arr2 = { 2, 5, 6, 7, 15, 31, 45 };

    int[] arr3 = mergeArr(arr1, arr2);

    for(int i =0; i< arr3.length; i++){
      System.out.print(arr3[i]);
    }
  }
}
