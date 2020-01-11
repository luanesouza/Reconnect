# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

annie = User.create(name: 'Annie')

symptom = Symptom.create(name: 'Happiness', description: 'Happiness is cool')
symptom1 = Symptom.create(name: 'Sadness', description: 'Sadness is important')
symptom2 = Symptom.create(name: 'Boredom', description: '')
symptom3 = Symptom.create(name: 'Tiredness', description: 'Tired')

diary1 = annie.diaries.create(title: 'Christmas Eve', content: 'My first Christmas alone', image_url: 'https://i.pinimg.com/originals/d3/8f/01/d38f0159388cb34ce8fcc47b59201955.jpg')
diary2 = annie.diaries.create(title: 'Birth of my daughter', content: 'My daughter was born today', image_url: 'https://i.etsystatic.com/15729766/r/il/6ede03/1661920067/il_570xN.1661920067_qnyr.jpg')
diary3 = annie.diaries.create(title: 'My Birthday', content: 'Today I am turning 28 years old', image_url: 'https://ae01.alicdn.com/kf/HTB1fmyeaLLsK1Rjy0Fbq6xSEXXa4.jpg')
diary4 = annie.diaries.create(title: 'First job', content: 'My first Christmas alone', image_url: 'https://inspirationfeeed.files.wordpress.com/2013/02/282268221132773839_b84d798ace5a1.jpg')
diary5 = annie.diaries.create(title: 'NY Eve', content: 'My first NY alone', image_url: 'https://i.pinimg.com/564x/b0/bb/99/b0bb999ebac24db8d65703cef6c1dd24.jpg')
# annie.symptoms.create(name: 'Depression', description: 'pending', diary_id: diary1.id)

DiarySymptom.create(diary_id: diary5.id , symptom_id: symptom1.id)
DiarySymptom.create(diary_id: diary1.id, symptom_id: symptom1.id)
DiarySymptom.create(diary_id: diary4.id , symptom_id: symptom3.id)
DiarySymptom.create(diary_id: diary3.id , symptom_id: symptom2.id )
