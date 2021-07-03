# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Isaac')
User.create(name: 'Maria')
User.create(name: 'Luciano')
User.create(name: 'Josh')

Card.create(name: 'Gold', welcome_o: '10,000', minimum_spend: '25,000', user_id: 1)
Card.create(name: 'Green', welcome_o: '10,000', minimum_spend: '25,000', user_id: 1)
Card.create(name: 'Platnium', welcome_o: '10,000', minimum_spend: '25,000', user_id: 1)
Card.create(name: 'Centrurion', welcome_o: '10,000', minimum_spend: '25,000', user_id: 1)

