from backend import create_app
from flask import request
from flask_cors import CORS
from backend.pytesseract import execute, preprocess
import base64
import pytesseract


app = create_app()
CORS(app)





@app.route("/image", methods=['POST'])
def extractImage():
    data = request.get_data()
    decoded = base64.b64decode(data)

    img_file = open('img.jpg', 'wb')
    img_file.write(decoded)
    img_file.close()
    
    name_of_image = "img.jpg"

    return name_of_image


@app.route("/image", methods=['GET'])
def processImage():
    data = request.args.get('image_name',type=str)
    execute(data)
    firstName = preprocess('cropped_image_fitst_name.jpg', 5, 1)

    arabic_name=pytesseract.image_to_string(firstName, lang='ara',config= ".")
    first_name = arabic_name[::-1].split()[-1]
    print(first_name)

    id = preprocess("cropped_image_id.jpg", 5, 1)

    arabic_numbers=pytesseract.image_to_string(id , lang='arabic_numbers',config= ".")
    print(arabic_numbers, end=" ")

    return data

if __name__ == "__main__":
    app.run(debug=True)
