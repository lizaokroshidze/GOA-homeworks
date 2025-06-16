from itertools import permutations

def latest_clock(a, b, c, d):
    max_time = ""
    
    for h1, h2, m1, m2 in permutations([a, b, c, d]):
        hours = h1 * 10 + h2
        minutes = m1 * 10 + m2
        
        if 0 <= hours < 24 and 0 <= minutes < 60:
            time_str = f"{hours:02}:{minutes:02}"
            if time_str > max_time:
                max_time = time_str
    
    return max_time
