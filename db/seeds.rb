# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cory = Child.create(name: "Cory", wallet: "0")

laundry = Chore.create(name: "Fold clothes", finished: false, value: "5")

tv = Reward.create(name: "1 hr of tv time", image: "null", cost: "12")

coryLaundry = ChildChore.create(child_id: cory.id, chore_id: laundry.id)