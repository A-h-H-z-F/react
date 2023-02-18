export default function Fruits (){

var fruit =  ["Apple","Banana","Apricot","Atemoya","Avocado","Blueberry","Ackee","Cranberry",
"Cherry","Longan","Date","Cherimoya","Orange","Grapes","Fig","Coconut",
"Grapefruit","Gooseberry","Lime","Chempedak","Hazelnut","Honeyberry","Papaya","Durian",
"Mango","Pineapple","Pomegranate","Guava","Jackfruit","Jujube","Dragonfruit","Jenipapo",
"Kiwi","Kabosu","Kiwano","Watermelon","Sapota","Cantaloupe","Langsat"]

const RandomFruit = Math.floor(Math.random() * fruit.length);
const SelectedFruit = fruit[RandomFruit]



return  SelectedFruit

}
