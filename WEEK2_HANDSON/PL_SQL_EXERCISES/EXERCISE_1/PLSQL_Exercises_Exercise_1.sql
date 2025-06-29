VARIABLE emp_name VARCHAR2(50)
VARIABLE emp_years NUMBER

BEGIN
    :emp_name := 'Suresh';
    :emp_years := 4;
END;
/

DECLARE
    emp_bonus NUMBER;
BEGIN
    IF :emp_years < 2 THEN
        emp_bonus := 0;
    ELSIF :emp_years BETWEEN 2 AND 5 THEN
        emp_bonus := 4500;
    ELSIF :emp_years BETWEEN 6 AND 10 THEN
        emp_bonus := 9500;
    ELSE
        emp_bonus := 18000;
    END IF;

    DBMS_OUTPUT.PUT_LINE('_Bonus Report_');
    DBMS_OUTPUT.PUT_LINE('Name: ' || :emp_name);
    DBMS_OUTPUT.PUT_LINE('Experience (Years): ' || :emp_years);
    DBMS_OUTPUT.PUT_LINE('Eligible Bonus: ' || emp_bonus);
END;
/
