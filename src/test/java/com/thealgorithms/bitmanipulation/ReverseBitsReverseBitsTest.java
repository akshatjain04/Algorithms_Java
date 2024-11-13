
// ********RoostGPT********
/*
Test generated by RoostGPT for test Java-test-1 using AI Type  and AI Model

ROOST_METHOD_HASH=reverseBits_6cf3d3ef63
ROOST_METHOD_SIG_HASH=reverseBits_b886113125

Here are your existing test cases which we found out and are not considered for test generation:

File Path: /var/tmp/Roost/RoostGPT/Java-test-1/4fe02726-06d9-4581-a823-6990ffcbda14/source/Algorithms_Java/src/test/java/com/thealgorithms/bitmanipulation/ReverseBitsTest.java
Tests:
    "@Test
@Test
void testReverseBits() {
    assertEquals(0, ReverseBits.reverseBits(0));
    assertEquals(-1, ReverseBits.reverseBits(-1));
    assertEquals(964176192, ReverseBits.reverseBits(43261596));
}
""""
  Scenario 1: Reverse Bits for Positive Number

  Details:
    TestName: testReverseBitsForPositiveNumber
    Description: This test case aims to check the working of reverseBits method when a positive number is passed as input.
  Execution:
    Arrange: No preparation is required as the method takes an integer as an input.
    Act: Invoke the reverseBits method and pass an integer number for which reversed bits needs to be calculated.
    Assert: Verify if the returned reversed bit number matches with the expected one.
  Validation:
    Assert aims to verify if the returned reversed bit number matches with the expected one. The method is expected to reverse the bits of the given integer number and return the reversed bit number.

  Scenario 2: Reverse Bits for Negative Number

  Details:
    TestName: testReverseBitsForNegativeNumber
    Description: This test case aims to check the working of reverseBits method when a negative number is passed as input.
  Execution:
    Arrange: No preparation is required as the method takes an integer as an input.
    Act: Invoke the reverseBits method and pass a negative integer number for which reversed bits needs to be calculated.
    Assert: Verify if the returned reversed bit number matches with the expected one.
  Validation:
    Assert aims to verify if the returned reversed bit number matches with the expected one. The method is expected to reverse the bits of the given negative integer number and return the reversed bit number.

  Scenario 3: Reverse Bits for Zero

  Details:
    TestName: testReverseBitsForZero
    Description: This test case aims to check the working of reverseBits method when zero number is passed as input.
  Execution:
    Arrange: No preparation is required as the method takes an integer as an input.
    Act: Invoke the reverseBits method and pass a zero integer number for which reversed bits needs to be calculated.
    Assert: Verify if the returned reversed bit number is zero.
  Validation:
    Assert aims to verify if the returned reversed bit number is zero. As the bit representation of zero is itself zero, the reverse bit number should also be zero.

  Scenario 4: Reverse Bits for Maximum Integer Value

  Details:
    TestName: testReverseBitsForMaxIntValue
    Description: This test case aims to check the working of reverseBits method when maximum integer value is passed as input.
  Execution:
    Arrange: No preparation is required as the method takes an integer as an input.
    Act: Invoke the reverseBits method and pass a maximum integer number for which reversed bits needs to be calculated.
    Assert: Verify if the returned reversed bit number matches with the expected one.
  Validation:
    Assert aims to verify if the returned reversed bit number matches with the expected one. The method is expected to reverse the bits of the given maximum integer value and return the reversed bit number.

  Scenario 5: Reverse Bits for Minimum Integer Value

  Details:
    TestName: testReverseBitsForMinIntValue
    Description: This test case aims to check the working of reverseBits method when minimum integer value is passed as input.
  Execution:
    Arrange: No preparation is required as the method takes an integer as an input.
    Act: Invoke the reverseBits method and pass a minimum integer number for which reversed bits needs to be calculated.
    Assert: Verify if the returned reversed bit number matches with the expected one.
  Validation:
    Assert aims to verify if the returned reversed bit number matches with the expected one. The method is expected to reverse the bits of the given minimum integer value and return the reversed bit number.
"""
*/

// ********RoostGPT********

package com.thealgorithms.bitmanipulation;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.*;

public class ReverseBitsReverseBitsTest {

	@Tag("valid")
	@Test
	public void testReverseBitsForPositiveNumber() {
		int input = 13; // binary representation: 1101
		int expected = -805306368; // binary representation:
									// 11010000000000000000000000000000
		assertEquals(expected, ReverseBits.reverseBits(input));
	}

	@Tag("valid")
	@Test
	public void testReverseBitsForNegativeNumber() {
		int input = -15; // binary representation: 11111111111111111111111111110001
		int expected = -134217729; // binary representation:
									// 11111111111111111111111110001000
		assertEquals(expected, ReverseBits.reverseBits(input));
	}

	@Tag("boundary")
	@Test
	public void testReverseBitsForZero() {
		int input = 0;
		int expected = 0;
		assertEquals(expected, ReverseBits.reverseBits(input));
	}

	@Tag("boundary")
	@Test
	public void testReverseBitsForMaxIntValue() {
		int input = Integer.MAX_VALUE;
		int expected = -1;
		assertEquals(expected, ReverseBits.reverseBits(input));
	}

	@Tag("boundary")
	@Test
	public void testReverseBitsForMinIntValue() {
		int input = Integer.MIN_VALUE;
		int expected = 1;
		assertEquals(expected, ReverseBits.reverseBits(input));
	}

}