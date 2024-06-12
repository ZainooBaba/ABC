from firestoreDataGrabber import load_data

def group_former(students, mentors):
    groups = []
    #TODO implement group formation logic
    return groups

if __name__ == "__main__":
    students, mentors = load_data()
    groups = group_former(students, mentors)
    print("groups: ", groups)

