def logical_calc(array, op):
    if not array:
        raise ValueError("The array cannot be empty.")
    
    if op == 'AND':
        return all(array)
    elif op == 'OR':
        return any(array)
    elif op == 'XOR':
        result = array[0]
        for value in array[1:]:
            result = result != value  # XOR operation
        return result
    else:
        raise ValueError("Invalid operator. Use 'AND', 'OR', or 'XOR'.")