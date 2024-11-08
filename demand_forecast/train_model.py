import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense, Dropout

# Load product demand data
data = pd.read_csv('product_demand_data.csv')

# Check data
print("Data loaded. First few rows:")
print(data.head())
print("Columns in data:", data.columns)

# Ensure the 'Quantity Sold' column exists
if 'Quantity Sold' not in data.columns:
    raise ValueError("Expected 'Quantity Sold' column in product_demand_data.csv")

# Prepare the data
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data['Quantity Sold'].values.reshape(-1, 1))

print("Scaled data shape:", scaled_data.shape)
print("Sample scaled data:", scaled_data[:10])

# Adjust sequence length for small dataset
sequence_length = 5

# Define training size (80% training, 20% testing)
train_size = int(len(scaled_data) * 0.8)
train_data = scaled_data[:train_size]
test_data = scaled_data[train_size - sequence_length:]  # Include the last sequence_length points for prediction

print("Train data shape:", train_data.shape)
print("Test data shape:", test_data.shape)

# Prepare training data
x_train = []
y_train = []

for i in range(sequence_length, len(train_data)):
    x_train.append(train_data[i-sequence_length:i, 0])
    y_train.append(train_data[i, 0])

# Convert to NumPy arrays
x_train, y_train = np.array(x_train), np.array(y_train)

# Debugging: Print out the shape of x_train and y_train
print(f"x_train length: {len(x_train)}")
print(f"y_train length: {len(y_train)}")
print(f"x_train sample: {x_train[:2]}")
print(f"y_train sample: {y_train[:2]}")

# If x_train is empty, raise an error before reshaping
if len(x_train) == 0:
    raise ValueError("x_train is empty. Check the data processing logic.")

# Reshape x_train to 3D array for LSTM: (samples, timesteps, features)
x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))

# Check shapes before model creation
print(f"x_train shape after reshaping: {x_train.shape}")
print(f"y_train shape: {y_train.shape}")

# Model creation
model = Sequential()
model.add(LSTM(units=50, return_sequences=True, input_shape=(x_train.shape[1], 1)))
model.add(Dropout(0.2))
model.add(LSTM(units=50, return_sequences=False))
model.add(Dropout(0.2))
model.add(Dense(units=25))
model.add(Dense(units=1))

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
model.fit(x_train, y_train, batch_size=32, epochs=10)

# Save the model
model.save('demand_forecast_model.keras')

print("Model trained and saved successfully.")
