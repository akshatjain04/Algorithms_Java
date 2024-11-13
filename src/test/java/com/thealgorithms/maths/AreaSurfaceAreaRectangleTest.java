
// ********RoostGPT********
/*
Test generated by RoostGPT for test java-algorithms using AI Type  and AI Model

ROOST_METHOD_HASH=surfaceAreaRectangle_2410f53623
ROOST_METHOD_SIG_HASH=surfaceAreaRectangle_f7258b0ef7

Here are your existing test cases which we found out and are not considered for test generation:

File Path: /var/tmp/Roost/RoostGPT/java-algorithms/38955bdf-5edd-48e8-8455-78db5c708c54/source/Algorithms_Java/src/test/java/com/thealgorithms/maths/AreaTest.java
Tests:
    "@Test
@Test
void testSurfaceAreaRectangle() {
    assertEquals(200.0, Area.surfaceAreaRectangle(10, 20));
}
"
    "@Test
@Test
void testAllIllegalInput() {
    assertAll(() -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCube(0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaSphere(0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaRectangle(0, 10)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaRectangle(10, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCylinder(0, 1)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCylinder(1, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaSquare(0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaTriangle(0, 1)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaTriangle(1, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaParallelogram(0, 1)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaParallelogram(1, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaTrapezium(0, 1, 1)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaTrapezium(1, 0, 1)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaTrapezium(1, 1, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCircle(0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaHemisphere(0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCone(1, 0)), () -> assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaCone(0, 1)));
}
""""
Scenario 1: Test when both length and width are positive

Details:
  TestName: testPositiveLengthAndWidth
  Description: This test is meant to check if the method correctly calculates the surface area when both length and width are positive.

Execution:
  Arrange: Set up a positive length and width.
  Act: Invoke the surfaceAreaRectangle method with the positive length and width.
  Assert: Use JUnit assertions to compare the actual area against the expected area.

Validation:
  The assertion aims to verify that the method correctly calculates the surface area for a rectangle with positive length and width. The expected result is the multiplication of length and width. The significance of this test is to ensure the basic functionality of the method.


Scenario 2: Test when length is negative

Details:
  TestName: testNegativeLength
  Description: This test is meant to check if the method throws an exception when the length is negative.

Execution:
  Arrange: Set up a negative length and a positive width.
  Act: Invoke the surfaceAreaRectangle method with the negative length and positive width.
  Assert: Use JUnit assertions to expect an IllegalArgumentException.

Validation:
  The assertion aims to verify that the method throws an exception when the length is negative. The expected result is an IllegalArgumentException. The significance of this test is to ensure that the method correctly handles invalid input.


Scenario 3: Test when width is negative

Details:
  TestName: testNegativeWidth
  Description: This test is meant to check if the method throws an exception when the width is negative.

Execution:
  Arrange: Set up a positive length and a negative width.
  Act: Invoke the surfaceAreaRectangle method with the positive length and negative width.
  Assert: Use JUnit assertions to expect an IllegalArgumentException.

Validation:
  The assertion aims to verify that the method throws an exception when the width is negative. The expected result is an IllegalArgumentException. The significance of this test is to ensure that the method correctly handles invalid input.


Scenario 4: Test when both length and width are zero

Details:
  TestName: testZeroLengthAndWidth
  Description: This test is meant to check if the method throws an exception when both length and width are zero.

Execution:
  Arrange: Set up a length and width of zero.
  Act: Invoke the surfaceAreaRectangle method with the zero length and width.
  Assert: Use JUnit assertions to expect an IllegalArgumentException.

Validation:
  The assertion aims to verify that the method throws an exception when both length and width are zero. The expected result is an IllegalArgumentException. The significance of this test is to ensure that the method correctly handles invalid input.
"""
*/

// ********RoostGPT********

package com.thealgorithms.maths;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.*;

public class AreaSurfaceAreaRectangleTest {

	@Test
	@Tag("valid")
	public void testPositiveLengthAndWidth() {
		double length = 5.0;
		double width = 4.0;
		double expected = 20.0;
		double actual = Area.surfaceAreaRectangle(length, width);
		Assertions.assertEquals(expected, actual, "The surface area of the rectangle should be 20.0");
	}

	@Test
	@Tag("invalid")
	public void testNegativeLength() {
		double length = -5.0;
		double width = 4.0;
		Assertions.assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaRectangle(length, width),
				"Expected IllegalArgumentException for negative length");
	}

	@Test
	@Tag("invalid")
	public void testNegativeWidth() {
		double length = 5.0;
		double width = -4.0;
		Assertions.assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaRectangle(length, width),
				"Expected IllegalArgumentException for negative width");
	}

	@Test
	@Tag("invalid")
	public void testZeroLengthAndWidth() {
		double length = 0.0;
		double width = 0.0;
		Assertions.assertThrows(IllegalArgumentException.class, () -> Area.surfaceAreaRectangle(length, width),
				"Expected IllegalArgumentException for zero length and width");
	}

}