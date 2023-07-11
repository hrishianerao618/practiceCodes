class Factorial {

  static int factorial(int n){
    if(n==0)
      return 1;
    return n*factorial(n-1);
    
  }
  public static void main(String[] args) {
    int n= 3;
    System.out.println("fact: "+factorial(n));
  }
}
