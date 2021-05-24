# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 
    Todolist.destroy_all

one = Todolist.create!(title: "One: Grocery Shopping", body: "Need to buy icecream", done: false)
two = Todolist.create!(title: "Two: Walk dog", body: "Go pooping", done: false)
three = Todolist.create!(title: "Three: Go to sleep", body: "My brain hurts", done: true)

end