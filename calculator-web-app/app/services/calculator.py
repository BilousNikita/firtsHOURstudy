def evaluate_expression(expression):
    try:
        result = eval(expression, {"__builtins__": {}}, {})
        return result
    except (SyntaxError, NameError, TypeError, ZeroDivisionError):
        return "Invalid calculation"