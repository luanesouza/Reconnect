# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

therapist = Therapist.create([
    {therapist_first_name: 'Penguin',
    therapist_last_name: 'McCarrol',
    therapist_email: 'penguin@gmail.com',
    therapist_password_digest: 'idkidkidk',
    location: 'Greater New York',
    therapist_skype: 'pengguin',
    price: '100 dollars'
     },
     {therapist_first_name: 'Elaine',
     therapist_last_name: 'Cavarron',
     therapist_email: 'el@gmail.com',
     therapist_password_digest: 'idkidaaakidk',
     location: 'Sao Paulo, BR',
     therapist_skype: 'elaine',
     price: '150 dollars'
      }
     ])

users = User.create([
  {user_first_name: 'shirin',
   user_last_name: 'anlen',
   user_email: 'shiring@gmail.com',
   user_password_digest: 'aaaaa'
   },
  {user_first_name: 'david',
   user_last_name: 'awesome',
   user_email: 'd@gmail.com',
  user_password_digest: 'aaaaaa'
   },
  {user_first_name: 'drakey',
   user_last_name: 'talley',
   user_email: 'drakey@gmail.com',
   user_password_digest: 'aaaaaa'
   },
  {user_first_name: 'darwin',
   user_last_name: 'smith',
   user_email: 'darwin@gmail.com',
   user_password_digest: 'aaaaaa'}])

consult = Appointment.create({user_id: 4, therapist_id: 2})
consult1 = Appointment.create({user_id: 3, therapist_id: 1})
consult2 = Appointment.create({user_id: 2, therapist_id: 2})
consult3 = Appointment.create({user_id: 1, therapist_id: 1})
