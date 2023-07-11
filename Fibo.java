class Fibo {

  static int fibonacci(int n) {
    if (n == 1 || n == 0)
      return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);

  }

  public static void main(String[] args) {
    int n = 7;
    System.out.println(n + "th element of fibonacci is: " + fibonacci(n));
  }
}
