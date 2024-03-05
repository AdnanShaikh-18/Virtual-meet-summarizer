
# open cmd and run `pip install -r requirements.txt`

import moviepy.editor as mp
from flask import Flask, request, jsonify,send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS

from transcriber import transcribe_and_analyze
from docs import create_document
import os

app = Flask(__name__)
CORS(app)


@app.route('/analyze', methods=["POST"])
def summarize():
    # os.remove("meeting_details.docx")
    if 'meeting_details.docx' in os.listdir(os.getcwd()):
        os.remove('meeting_details.docx')


    if 'file' not in request.files:  #if file not in the request body
        return jsonify(
            {'error': 'No file provided'}
            ), 400


    file = request.files['file']
    print(file.filename)
    if file.filename == '':
        return jsonify(
            {'error': 'No selected file'}
            ), 400


    filename = secure_filename(file.filename)
    file_path = 'uploads/' + filename
    file.save(file_path)


    clip = mp.VideoFileClip(str(file_path))
    mp3_file_name=filename.split('.')[0]
    clip.audio.write_audiofile(f"{mp3_file_name}.mp3")
    data=transcribe_and_analyze(mp3_file_name) #call the transcriber function from transcriber module
    create_document(
        data['title'],
        data['summary'],
        data['diarization']
        )

    output=data['title']+"\n"+data['summary']+"\n"+data['diarization']
    return jsonify({'output': output})



@app.route('/download',methods=['GET'])
def download():
    path = 'meeting_details.docx'
    return send_file(path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)


