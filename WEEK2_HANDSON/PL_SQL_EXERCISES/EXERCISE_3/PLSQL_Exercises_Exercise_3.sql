SET SERVEROUTPUT ON;

CREATE TABLE accounts (
  account_id NUMBER PRIMARY KEY,
  customer_name VARCHAR2(50),
  account_type VARCHAR2(20),
  balance NUMBER
);
/

CREATE TABLE employees (
  emp_id NUMBER PRIMARY KEY,
  emp_name VARCHAR2(50),
  department VARCHAR2(30),
  salary NUMBER
);
/

BEGIN
  INSERT INTO accounts VALUES (1001, 'Ravi', 'SAVINGS', 10000);
  INSERT INTO accounts VALUES (1002, 'Meena', 'CURRENT', 15000);
  INSERT INTO accounts VALUES (1003, 'Anil', 'SAVINGS', 20000);
  INSERT INTO accounts VALUES (1004, 'Swetha', 'SAVINGS', 30000);

  INSERT INTO employees VALUES (201, 'Arjun', 'IT', 50000);
  INSERT INTO employees VALUES (202, 'Divya', 'HR', 40000);
  INSERT INTO employees VALUES (203, 'Kumar', 'IT', 55000);
  INSERT INTO employees VALUES (204, 'Sneha', 'HR', 42000);

  COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE accounts
  SET balance = balance + (balance * 0.01)
  WHERE account_type = 'SAVINGS';

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to savings accounts.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || dept_name);
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
BEGIN
  UpdateEmployeeBonus('HR', 10);
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_balance EXCEPTION;
BEGIN
  DECLARE
    v_balance NUMBER;
  BEGIN
    SELECT balance INTO v_balance FROM accounts WHERE account_id = from_acc;
    IF v_balance < amount THEN
      RAISE insufficient_balance;
    END IF;
  END;

  UPDATE accounts
  SET balance = balance - amount
  WHERE account_id = from_acc;

  UPDATE accounts
  SET balance = balance + amount
  WHERE account_id = to_acc;

  DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from Account ' || from_acc || ' to Account ' || to_acc);

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ' || from_acc);
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('One or both account IDs not found.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
BEGIN
  TransferFunds(1003, 1002, 5000);
END;
/

SELECT * FROM accounts;
SELECT * FROM employees;
