from fastapi import FastAPI, HTTPException
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os

# Initialize the FastAPI app
app = FastAPI()

# Add CORS middleware to allow frontend requests from a specific origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Frontend URL (adjust as needed)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define Order model using Pydantic
class Order(BaseModel):
    productItems: str
    itemsNo: str
    incoming: str
    category: str
    date: str
    quantity: int
    price: float
    paid: bool

# In-memory orders list for storing orders
orders = []

# Route to fetch all orders
@app.get("/orders")
async def get_orders():
    return {"orders": orders}

# Route to add an order
@app.post("/orders")
async def add_order(order: Order):
    try:
        orders.append(order.dict())  # Simulating storing the order in memory
        return {"message": "Order added successfully!", "orders": orders}  # Return all orders
    except Exception as e:
        raise HTTPException(status_code=500, detail="There was an error adding the order: " + str(e))

# Model and CSV file paths
model_path = 'demand_forecast_model.keras'
data_file_path = 'product_demand_data.csv'

# Check if the model and data file exist
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file '{model_path}' not found. Please ensure it's in the correct location.")

if not os.path.exists(data_file_path):
    raise FileNotFoundError(f"Data file '{data_file_path}' not found. Please ensure it's in the correct location.")

# Load the trained model
model = load_model(model_path)

# Forecast route
@app.get("/forecast")
def forecast_demand():
    try:
        # Load and preprocess the data (ensure the CSV file exists and is accessible)
        data = pd.read_csv(data_file_path)

        # Check if necessary columns exist
        if 'Date' not in data.columns or 'Quantity Sold' not in data.columns:
            return JSONResponse(status_code=400, content={"error": "Required columns 'Date' or 'Quantity Sold' missing in data."})

        # Convert 'Date' column to datetime and set 'Quantity Sold' for training
        data['Date'] = pd.to_datetime(data['Date'])
        data_train = pd.DataFrame(data['Quantity Sold'])

        # Apply Min-Max scaling to normalize the data
        scaler = MinMaxScaler(feature_range=(0, 1))
        data_scaled = scaler.fit_transform(data_train)

        # Use the most recent 100 entries for prediction
        test_data = data_scaled[-100:]
        x_test = np.array([test_data])  # Reshape for the model input
        
        # Predict future demand using the trained model
        predicted_demand = model.predict(x_test)
        predicted_demand = scaler.inverse_transform(predicted_demand)

        # Example of returning forecasts for the next 5 days (adjust as necessary)
        forecast_data = []
        base_date = pd.to_datetime('2024-09-17')  # Starting date for the forecast

        # Generating multiple forecasted dates with small increments for variation
        for i in range(5):
            forecast_data.append({
                "ds": (base_date + pd.DateOffset(days=i)).strftime('%Y-%m-%d'),
                "yhat": float(predicted_demand[0][0]) + i * 5  # Add small increments for variation
            })

        return forecast_data

    except FileNotFoundError as e:
        # If file not found, return a 500 error
        return JSONResponse(status_code=500, content={"error": f"File error: {str(e)}"})

    except Exception as e:
        # Handle other errors (e.g., model issues, invalid data) and return an appropriate message
        return JSONResponse(status_code=500, content={"error": f"An error occurred while forecasting: {str(e)}"})
