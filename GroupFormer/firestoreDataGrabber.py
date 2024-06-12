import firebase_admin
from firebase_admin import credentials, firestore
import json

cred = None
db = None


def authenticate():
    global cred, db
    service_account_path = "abc-firebase-adminsdk.json"

    cred = credentials.Certificate(service_account_path)
    firebase_admin.initialize_app(cred)

    db = firestore.client()


def fetch_data(collection_name):
    file_path = f'data/{collection_name}.json'
    try:
        data = {}
        ref = db.collection(collection_name)
        docs = ref.stream()
        for doc in docs:
            data[doc.id] = doc.to_dict()
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"Data successfully written to {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")


def load_data():
    try:
        with open("data/Students.json", 'r') as file:
            students = json.load(file)
            students = [value for key, value in students.items()]
            print("Data successfully loaded from data/Students.json")
        with open("data/Mentors.json", 'r') as file:
            mentors = json.load(file)
            mentors = [value for key, value in mentors.items()]
            print("Data successfully loaded from data/Mentors.json")
        return students, mentors
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    authenticate()
    fetch_data("Students")
    fetch_data("Mentors")
