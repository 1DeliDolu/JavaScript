def sort_words(input):
    return ' '.join(sorted(input.split(), key = str.casefold))
 
if __name__ == '__main__':
    print(sort_words('banana ORANGE apple'))