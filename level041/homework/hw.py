def filter_list(l):
    result = []
    for item in l:
        if isinstance(item, int):
            result.append(item)
    return result
