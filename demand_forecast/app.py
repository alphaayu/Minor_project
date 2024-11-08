from fastapi import FastAPI
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # The frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rest of your code...

# Load the trained model
model = load_model('demand_forecast_model.keras')

@app.get("/forecast")
def forecast_demand():
    # Load and preprocess data
    data = pd.read_csv('product_demand_data.csv')
    data['Date'] = pd.to_datetime(data['Date'])
    data_train = pd.DataFrame(data['Quantity Sold'])
    scaler = MinMaxScaler(feature_range=(0, 1))
    data_scaled = scaler.fit_transform(data_train)

    # Predict future demand
    test_data = data_scaled[-100:]
    x_test = [test_data]
    x_test = np.array(x_test)
    predicted_demand = model.predict(x_test)
    predicted_demand = scaler.inverse_transform(predicted_demand)

    # Example of returning multiple dates (you can update this with real dates)
    forecast_data = []
    base_date = pd.to_datetime('2024-09-17')
    
    # Generating multiple dummy forecasts for the next 5 days (adjust as necessary)
    for i in range(5):
        forecast_data.append({
            "ds": (base_date + pd.DateOffset(days=i)).strftime('%Y-%m-%d'),
            "yhat": float(predicted_demand[0][0]) + i * 5  # Adding small increments for demo
        })

    return forecast_data
