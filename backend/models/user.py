from werkzeug.security import generate_password_hash, check_password_hash
from flask_pymongo import PyMongo
from flask import current_app

def get_mongo():
    return PyMongo(current_app)

class User:
    def __init__(self, name, email, password, pic=None, is_admin=False, predicted_value=None):
        self.name = name
        self.email = email
        self.password = generate_password_hash(password)
        self.pic = pic or "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        self.is_admin = is_admin
        self.predicted_value = predicted_value

    def save_to_db(self):
        mongo = get_mongo()
        user_data = {
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'pic': self.pic,
            'isAdmin': self.is_admin,
            'predicted_value': self.predicted_value
        }
        mongo.db.users.insert_one(user_data)

    @staticmethod
    def find_by_email(email):
        mongo = get_mongo()
        return mongo.db.users.find_one({'email': email})

    @staticmethod
    def check_password(stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)
