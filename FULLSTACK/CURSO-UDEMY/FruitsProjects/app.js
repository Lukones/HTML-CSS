const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please check your data entry, no name specified!"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
    name: "Mongo",
    rating: 7.5,
    review: "Nice Fruit."
})

//mango.save();

/*
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
})

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
})
const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texure"
})

Fruit.insertMany([kiwi, orange, banana])
    .then(() => {
        console.log("Succesfully saved all the fruits to fruitsDB");
    })
    .catch ((err) => {
        console.log(err);
    }); 
*/

const personSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        favouriteFruit: {
            type: [fruitSchema],
        }
    });

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37,
});

//person.save();

mango.save()
    .then(() => {
        console.log('Fruit saved successfully');
        return Person.updateOne({ name: "John" }, { "favouriteFruit": mango })
    })
    .then(() => {
        console.log("Succesfully add new favorite fruit.");
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log(err);
    })

/*
Person.deleteOne({ name: "John" })
    
    .then(() => {
        console.log("Succesfully remove the document.");
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log(err);
        
    })
   */
/*
Person.deleteMany({ name: "John" })
    .then(() => {
        console.log("Succesfully remove all document.");
    })
    .catch((err) => {
        console.log(err);
    })
*/

