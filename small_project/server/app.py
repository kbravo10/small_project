# #!/usr/bin/env python3


# # Standard library imports

# # Remote library imports
# from flask import request
# from flask_restful import Resource

# # Local imports
# from config import app, db, api
# # Add your model imports


# # Views go here!

# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'


# if __name__ == '__main__':
#     app.run(port=5555, debug=True)


#method create staircase
def create_staircase(filename):
    with open(filename, 'r') as file:
        file_lines = [line for line in file]
    # Sort the list in ascending order
    sorted_file_list = sorted(file_lines, key = lambda x: int(x.split(' ')[0]))

    step = 1
    subsets = []
    while len(sorted_file_list) != 0:
        if len(sorted_file_list) >= step:
            subsets.append(sorted_file_list[0:step])
            sorted_file_list = sorted_file_list[step:]
            step += 1
        else:
            break

    return subsets
def decode(message_file):
    pyramid = create_staircase(message_file)
    code = []
    for ele in pyramid:
        if len(ele) == 1:
            code.append((ele[0].split(' ',1)[1]).replace('\n',''))
        else:
            code.append((ele[-1].split(' ',1)[1]).replace('\n',''))
    sentence = ' '.join(code)

    return sentence
print(decode('filr.txt'))