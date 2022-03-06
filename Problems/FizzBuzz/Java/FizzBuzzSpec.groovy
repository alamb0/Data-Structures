import spock.lang.Specification
import spock.lang.Unroll

class FizzBuzzSpec extends Specification {
    def fizzBuzzClass

    def setup() {
        fizzBuzzClass = new FizzBuzz()
    }

    @Unroll
    def "FizzBuzz"() {
        given: "an integer input"

        when: "fizzBuzz is called"
        String result = fizzBuzzClass.fizzBuzz(inputInt)
        
        then: "result is returned"
        assert result == outputString
    
        where: "input and output specified"
        inputInt || outputString
              1  || "1"
              3  || "Fizz"
              5  || "Buzz"
              15 || "FizzBuzz"
    }
}
