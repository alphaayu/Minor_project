import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedData = async () => {
    const { default: Inventory } = await import('../models/inventory.js');
    
    await Inventory.deleteMany({});
    await Inventory.create({ name: 'Product A', quantity: 50 });
    await Inventory.create({ name: 'Product B', quantity: 5 });
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedData().catch(error => {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
});
