package Problems.FizzBuzz.Java;

public class FizzBuzz {
    public static void main(String[] args) {

    }

    public static String fizzBuzz(int input) {
        String result = Integer.toString(input);
        if (input % 3 == 0 && input % 5 == 0) {
            result = "FizzBuzz";
        } else if (input % 3 == 0) {
            result = "Fizz";
        } else if (input % 5 == 0) {
            result = "Buzz";
        }
        return result;
    }
}
