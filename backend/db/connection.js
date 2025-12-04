import mongoose from 'mongoose'

export const connectDB = async () => {
    return await mongoose.connect(process.env.DB_CONNECTION)
        .then(res => console.log(`DB Connected successfully`))
        .catch(err => console.log(` Fail to connect  DB.........${err} `))
}
