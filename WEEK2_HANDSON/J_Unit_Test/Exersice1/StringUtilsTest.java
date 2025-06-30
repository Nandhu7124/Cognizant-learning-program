package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class StringUtilsTest {

    @Test
    public void testReverse_normalString() {
        StringUtils utils = new StringUtils();
        assertEquals("olleh", utils.reverse("hello"));
    }

    @Test
    public void testReverse_emptyString() {
        StringUtils utils = new StringUtils();
        assertEquals("", utils.reverse(""));
    }

    @Test
    public void testReverse_nullString() {
        StringUtils utils = new StringUtils();
        assertNull(utils.reverse(null));
    }
}
