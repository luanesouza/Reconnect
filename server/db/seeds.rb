# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

annie = User.create(name: 'Annie')

diary1 = Diary.create(title: 'Christmas Eve', content: 'My first Christmas alone')
diary2 = Diary.create(title: 'Birth of my daughter', content: 'My daughter was born today')
diary3 = Diary.create(title: 'My Birthday', content: 'Today I am turning 28 years old')
diary4 = Diary.create(title: 'First job', content: 'My first Christmas alone')
diary5 = Diary.create(title: 'Christmas Eve', content: 'My first Christmas alone')
annie.symptoms.create(name: 'Depression', description: 'pending', diary_id: diary1.id)
