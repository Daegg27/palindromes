def palindrome(word):
    # if str(word).lower().split("").reverse().join("") == str(word).lower():
    #     print("hello")
    return str(word) == str(word)[::-1]
print(palindrome("yoy"))