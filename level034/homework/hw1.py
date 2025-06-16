geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    for goose in geese:
        while goose in birds:
            birds.remove(goose)
    return birds