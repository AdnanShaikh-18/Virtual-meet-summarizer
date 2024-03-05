import moviepy.editor as mp
from time import time
import assemblyai as aai
import openai
import json
import os
aai.settings.api_key = "bb7da29b06c343939583e1f59f6ffb3d"
openai.api_key="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"

def transcribe_and_analyze(source):
    transcriber = aai.Transcriber()
    print("transcriber loaded")

    config = aai.TranscriptionConfig(
        speaker_labels=True
        ) #audio diarization 
    print("config done")

    transcript = transcriber.transcribe(f'{source}.mp3', config)

    speaker_and_text={}
    for utterance in transcript.utterances:
        # print(f"Speaker {utterance.speaker}: {utterance.text}")
        if f"Speaker {utterance.speaker}" in speaker_and_text: # if speaker not in text previously
            speaker_and_text[f"Speaker {utterance.speaker}"]=speaker_and_text[f"Speaker {utterance.speaker}"]+"..."+utterance.text
        else:
            speaker_and_text[f"Speaker {utterance.speaker}"]=utterance.text

    speaker_text=""
    for speaker,sentences in speaker_and_text.items():
        speaker_text=speaker_text+f"{speaker}\n{sentences}\n\n"
    

    prompt=f"""
    Summarize the following text in 200 words and dont include words like good morning , hello etc and provide a suitable title .give me a sutiable title and good summary in json format with keys as title and summary which i can parse for my business needs. the text is  {transcript.text}
    """
    output = openai.ChatCompletion.create(
      model="gpt-3.5-turbo", 
      messages=[{"role": "user", "content":prompt}]
    )
        


    data=json.loads(output['choices'][0]['message']['content'])  #convert the output to json and store in data variable


    return {
        'summary':data['summary'],
        'title':data['title'],
        'diarization':speaker_text
        }



# `pip install openai==0.28

# audio diarization ==> clustering  ==> agglomerative