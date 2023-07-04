class Main {

  public static String reverse(String input) {
    char[] inpCharArr = new char[input.length()];
    int j = 0;
    for (int i = input.length() - 1; i >= 0; i--) {//O(n)
      inpCharArr[j] = input.charAt(i);
      j++;
    }
    return new String(inpCharArr);
  }

  public static void main(String[] args) {
    String input = "Hello There!";

    String output = reverse(input);

    System.out.print("Reverse: " + output);
  }
}
