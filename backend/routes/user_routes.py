from flask import Blueprint, request, jsonify
from models.user import User

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/api/user', methods=['POST'])
def create_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    pic = data.get('pic')

    if not name or not email:
        return jsonify({'error': 'Name and email are required'}), 400

    # Check if email already exists
    existing_user = User.find_by_email(email)
    if existing_user:
        return jsonify({'error': 'Email already exists'}), 400

    user = User(name=name, email=email, password="default_password", pic=pic)
    try:
        user.save_to_db()
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        if "duplicate key error" in str(e):
            return jsonify({'error': 'Email already exists'}), 400
        return jsonify({'error': str(e)}), 500

@user_routes.route('/api/user/<email>', methods=['GET'])
def get_user_by_email(email):
    user = User.find_by_email(email)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'name': user.get('name'),
        'email': user.get('email'),
        'pic': user.get('pic'),
        'isAdmin': user.get('isAdmin'),
        'predicted_value': user.get('predicted_value')
    }), 200
