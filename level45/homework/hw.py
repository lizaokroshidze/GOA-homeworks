def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(i for i in range(begin_number, end_number + 1, step))