package com.exercise4;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CounterTest {

    private Counter counter;

    @Before
    public void setUp() {
        counter = new Counter(); // Setup (Before each test)
        System.out.println("Before each test");
    }

    @After
    public void tearDown() {
        System.out.println("After each test"); // Teardown
    }

    @Test
    public void testIncrement() {
        counter.increment();
        counter.increment();

        assertEquals(2, counter.getCount());
    }

    @Test
    public void testReset() {
        counter.increment();
        counter.increment();

        counter.reset();

        assertEquals(0, counter.getCount());
    }
}
