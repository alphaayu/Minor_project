import pandas as pd
from fbprophet import Prophet
from flask import Flask, jsonify

# Flask app for API
app = Flask(__name__)

# Route to serve forecast data
@app.route('/forecast', methods=['GET'])
def forecast():
    # Load historical data (assume CSV is in the root directory)
    data = pd.read_csv('../sales_data.csv')
    data['timestamp'] = pd.to_datetime(data['timestamp'])
    
    # Prepare data for Prophet
    df = pd.DataFrame()
    df['ds'] = data['timestamp']  # 'ds' for date
    df['y'] = data['quantity_sold']  # 'y' for target

    # Initialize and fit the model
    model = Prophet()
    model.fit(df)
    
    # Make future predictions
    future = model.make_future_dataframe(periods=10)
    forecast = model.predict(future)
    
    # Return forecast results as JSON
    forecast_data = forecast[['ds', 'yhat']].to_dict(orient='records')
    return jsonify(forecast_data)

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000, debug=True)
