import mongoose from 'mongoose';
import mongo from 'mongodb';

const { ObjectId } = mongo;
const { Schema } = mongoose;

const Requests = new Schema({
  niche: ObjectId,
  date: Date, // Время запроса к БД
  language: String, // Язык запроса
  region: ObjectId, // Целевая территория запроса
  lastperiod: Date, // Последний период, по которому есть информация
  source: ObjectId, // Поисковик
  volumes: [Number], // Массив числа поисковых запросов по периодам, начиная с <lastperiod>
});

export const requests = mongoose.model('requests', Requests);
