import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the machine learning model and scaler
try:
    with open('models/model.pkl', 'rb') as file:
        loaded_model = pickle.load(file)

    with open('models/preprocessor.pkl', 'rb') as file:
        loaded_preprocessor = pickle.load(file)
except Exception as e:
    print(f"Error loading model or scaler: {e}")
    raise e

@app.route('/predict', methods=['POST'])
def predict_diamond_price():
    try:
        data = request.get_json()

        Gender = data.get('Gender')
        AGE = float(data.get('AGE'))
        Urea = float(data.get('Urea'))
        Cr = float(data.get('Cr'))
        HbA1c = float(data.get('HbA1c'))
        Chol = float(data.get('Chol'))
        TG = float(data.get('TG'))
        HDL = float(data.get('HDL'))
        LDL = float(data.get('LDL'))
        VLDL = float(data.get('VLDL'))
        BMI = float(data.get('BMI'))

        # Create a DataFrame
        input_df = pd.DataFrame({
            'Gender': [Gender],
            'AGE': [AGE],
            'Urea': [Urea],
            'Cr': [Cr],
            'HbA1c': [HbA1c],
            'Chol': [Chol],
            'TG': [TG],
            'HDL': [HDL],
            'LDL': [LDL],
            'VLDL': [VLDL],
            'BMI': [BMI]
        })

        # Preprocess the data
        new_data_scaled = loaded_preprocessor.transform(input_df)

        # Make prediction
        result = loaded_model.predict(new_data_scaled)

        # Convert NumPy array to a native Python data type (float)
        predicted_price = float(result[0])

        # Return the predicted result
        return jsonify({'predicted_value': predicted_price})

    except KeyError as e:
        return jsonify({"error": f"Missing key: {e}"}), 400
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": f"Prediction error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
