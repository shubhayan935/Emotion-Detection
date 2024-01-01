import cv2
from deepface import DeepFace

frame = cv2.imread("photo.jpg")
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

face = face_cascade.detectMultiScale(frame, scaleFactor=1.1, minNeighbors=5)

for x, y, w, h in face:
    image = cv2.rectangle(frame, (x, y), (x + w, y + h), (89, 2, 236), 1)
    analyze = DeepFace.analyze(frame, actions=['emotion'])
    cv2.putText(image, analyze[0]['dominant_emotion'], (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (224, 77, 176), 2)

cv2.imshow(frame)