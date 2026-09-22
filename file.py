def calculator():
	"""Run a simple command-line calculator."""
	while True:
		expression = input("Enter a calculation (or 'q' to quit): ").strip()
		if expression.lower() == "q":
			break

		try:
			result = eval(expression, {"__builtins__": {}}, {})
			print(result)
		except (SyntaxError, NameError, TypeError, ZeroDivisionError):
			print("Invalid calculation")


if __name__ == "__main__":
	calculator()
