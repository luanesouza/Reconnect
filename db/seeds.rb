# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Therapist.destroy_all()

therapist = Therapist.create([
    {therapist_first_name: 'Noah',
    therapist_last_name: 'McCarrol',
    bio: 'I opened my first practice in the Medical Arts Building at Northwest Hospital.  I practiced there over a year before moving to my current office at 7201 5th Avenue NE.
    While at Northwest, I was invited by Bill Turska N.D. in Mist, Oregon to come and help him.  He was my first mentor.  He was an old-timey Naturopath that had a history of incredible cures.  I would work with him on Mondays, Wednesdays, and Saturdays, and at my practice in Seattle on Tuesdays, Thursdays, and Fridays.  One night when we had finished working with clients, Dr. Turska and I stayed up and talked for a long time into the night.  When I woke up the next morning, I felt different, like I was no longer a young Doc working with a mentor but two colleagues working together.  It wasn\'t his words to me, it was something else.  He would talk about how he worked on patients through the ethers, and I think he worked on me.',
    therapist_email: 'lauren@gmail.com',
    therapist_image: 'https://as1.ftcdn.net/jpg/02/85/47/84/500_F_285478435_lYaLSqd9C8ApI0Fl1XROLNQ4PqUHUij6.jpg',
    therapist_password_digest: 'idkidkidk',
    location: 'Greater New York',
    therapist_skype: 'pengguin',
    specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
    education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
    price: '100 dollars'
     },
     {therapist_first_name: 'Michael',
     therapist_last_name: 'Brown',
     bio: '',
     therapist_email: 'mb@gmail.com',
     therapist_image: 'https://as2.ftcdn.net/jpg/02/85/48/23/500_F_285482312_F1lMWYFYDyvbYw8gsQCJrs8gBkrMnd8s.jpg',
     therapist_password_digest: 'omgomgomgomgo',
     location: 'Greater New York',
     therapist_skype: 'mb_doctor',
     specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
     education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
     price: '200 dollars'
      },
      {therapist_first_name: 'Daniel',
      therapist_last_name: 'Gillen',
      bio: 'One day while I was walking across campus, a friend called to me.  She handed me a paper with the name "John Bastyr College of Naturopathic Medicine" written on it.  I felt a flash like lightening and shouted, "That\'s it, I\'m going to be a Naturopathic doctor!  I\'m grateful to her everyday for that note. I finished my Biology/ Pre-med, interviewed at John Bastyr College of Naturopathic Medicine and was accepted.  Also, I joined the U.S. Army as a medic which helped pay the way to fulfill my dream. I went to school with a great group of people at John Bastyr College of Naturopathic Medicine.  We worked hard, studied hard, and supported each other to get through the program and graduate. I\'m proud of my class, as they have truly contributed to the advancement of Naturopathic medicine, and still do. The year we graduated the college name changed to Bastyr University.',
      therapist_email: 'dg@gmail.com',
      therapist_image: 'https://as1.ftcdn.net/jpg/02/85/47/70/500_F_285477058_47VCitO3BhQmRJkxFth82mSeaE8TNNpH.jpg',
      therapist_password_digest: 'omgomaaaaago',
      location: 'Greater New York',
      therapist_skype: 'dr_gillen',
      specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
      education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
      price: '200 dollars'
       },
       {therapist_first_name: 'Michelle',
       therapist_last_name: 'Smith',
       bio: 'ProfesHor of Pediatrics at the University of Michigan Medical School and Professor at the Medical School and at the University of Michigan School of Public Health. Dr Smith attended Brown University for her undergraduate education anhistory sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.d the University of Pennsylvania for her medical degree, where she was elected to the Alpha Omega Alpha Honors Society. She completed internship and
       residency in General Pediatrics at the Boston Combined Residency Program (Childrens Hospital, Boston andBoston Medical Center). She completed dual training in Pediatric Endocrinology and Pediatric Health Services Research and received a Master in Public Health from the Department of Health Management and Policy at the University of Michigan.',
       therapist_email: 'ms@gmail.com',
       therapist_image: 'https://as2.ftcdn.net/jpg/02/85/48/23/500_F_285482351_ou5gWEIoBEMEQ8uGFnwO0mV1X2YvzHRe.jpg',
       therapist_password_digest: 'seriously',
       location: 'Brooklyn',
       therapist_skype: 'drsmith',
       specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
       education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
       price: '250 dollars'
        },
        {therapist_first_name: 'Matt',
        therapist_last_name: 'Dellitalia',
        bio: 'Dr. Dellitalia earned his Bachelor of Arts degree in Neurobiology (1984) and his Medical Degree (1989) at the University of Virginia. Following residency in Emergency Medicine at the University of Pittsburgh, he completed additional training in Pediatrics, Pediatric Emergency Medicine and Pediatric Critical Care at The Children\'s Hospital, Boston. While at Harvard, Dr. Dellitalia`s research training focused upon novel means for the mechanical support of lung injury and for restoring lost control of regional pulmonary blood flow. Upon returning to the University of Virginia as PCCM Faculty, Dr. Dellitalia began to explore erythrocyte-based control of regional blood flow and made the observation that this signaling is disrupted in severe inflammatory states. This observation suggested the hypothesis that acquired injury to erythrocytes alters vascular control, regional blood flow regulation and O2 delivery homeostasis; the Dellitalia Lab pursues this question.',
        therapist_email: 'mattd@gmail.com',
        therapist_image: 'https://as1.ftcdn.net/jpg/02/85/47/84/500_F_285478435_lYaLSqd9C8ApI0Fl1XROLNQ4PqUHUij6.jpg',
        therapist_password_digest: 'seriouslythough',
        location: 'Queens',
        therapist_skype: 'mattd',
        specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
        education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
        price: '280 dollars'
         },
         {therapist_first_name: 'Eric',
         therapist_last_name: 'Leung',
         bio: 'He came to Washington University in 2006 as Director of Pediatric Critical Care Medicine. After leading PCCM here for 10 years, Dr. Leung stepped down as Division Director to focus upon his expanding research program, which explores the physiology of acquired red cell injury, translational transfusion medicine in the ICU setting, and development of a novel bio-synthetic artificial red cell to serve as a blood substitute. His global health projects are based in Blantyre, Malawi in collaboration with a large international malaria research group and range from mechanistic studies of infected red cell pathophysiology to clinical pathway implementation for the care of acutely ill children in resource-limited settings.',
         therapist_email: 'eleung@gmail.com',
         therapist_image: 'https://as2.ftcdn.net/jpg/02/85/48/23/500_F_285482318_ZKHUUIcPj6xBjt3JZIKHJfRxUWlKyflN.jpg',
         therapist_password_digest: 'seriously',
         location: 'Brooklyn',
         therapist_skype: 'ericc',
         specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
         education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
         price: '250 dollars'
          },
          {therapist_first_name: 'Michelle',
          therapist_last_name: 'Souza',
          bio: 'In 2008 she opened the award-winning Santa Cruz Integrative Medicine Clinic. Dr. Abrams treats many of the world’s most influential people, from CEOs to billionaire entrepreneurs to Nobel Peace laureates. She has been voted “Best Dellitalia” in Santa Cruz County every year, from 2009–2017.',
          therapist_email: 'msouza@gmail.com',
          therapist_image: 'https://as1.ftcdn.net/jpg/02/85/47/82/500_F_285478280_hkLtznSTC2reb8a2LHW9AeiwVYMZjC4G.jpg',
          therapist_password_digest: 'seriouslyyeahbro',
          location: 'Brooklyn',
          therapist_skype: 'mrsouza',
          specialty: 'Go and be the Doctor that I could never be.
                      Then, all things considered...it\'s time I grew up.
                      Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
          education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
          price: '250 dollars'
           },
       {therapist_first_name: 'Elaine',
       therapist_last_name: 'Cavarron',
       bio: 'In 2009, Dr. Cavarron was named a Brehm Investigator by the Brehm Center for Type 1 Diabetes Research. In 2012, she was a visiting scholar at in Child Health Policy at Stanford University and in 2015 was a visiting scholar at Google Life Sciences (now Verily). At the 2016 Pediatric Academic Societies meeting, she was the first recipient of the Paul Kaplowitz, MD, Endowed Lectureship for contributions to quality and cost-effective care in Pediatric Endocrinology, an award sponsored by the American Academy of Pediatrics and the Pediatric Endocrine Society. Finally, she was named the Robert P. Kelch, MD Research Professor of Pediatrics in 2016. ',
       therapist_email: 'el@gmail.com',
       therapist_image: 'https://as1.ftcdn.net/jpg/02/85/47/84/500_F_285478436_y8Bcp3YecDCaTgQxvYn5U8obSoLhNodC.jpg',
       therapist_password_digest: 'idkidaaakidk',
       location: 'Sao Paulo, BR',
       therapist_skype: 'elaine',
       specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
       education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
       price: '150 dollars'
        },
       {therapist_first_name: 'Ishmet',
       therapist_last_name: 'Singh',
       bio: 'In 2009, Dr. Cavarron was named a Brehm Investigator by the Brehm Center for Type 1 Diabetes Research. In 2012, she was a visiting scholar at in Child Health Policy at Stanford University and in 2015 was a visiting scholar at Google Life Sciences (now Verily). At the 2016 Pediatric Academic Societies meeting, she was the first recipient of the Paul Kaplowitz, MD, Endowed Lectureship for contributions to quality and cost-effective care in Pediatric Endocrinology, an award sponsored by the American Academy of Pediatrics and the Pediatric Endocrine Society. Finally, she was named the Robert P. Kelch, MD Research Professor of Pediatrics in 2016. ',
       therapist_email: 'is@gmail.com',
       therapist_image: 'https://as2.ftcdn.net/jpg/02/85/48/33/500_F_285483373_SFvWkkyXvib9uKSysjFSmtC7GC878cjR.jpg',
       therapist_password_digest: 'idkidaaakidk',
       location: 'Sao Paulo, BR',
       therapist_skype: 'ish_met',
       specialty: 'Go and be the Doctor that I could never be. Then, all things considered...it\'s time I grew up. Well, who are you boys? Oh, of course! Are you his companions? Are you capable of speaking without flapping your hands about? I don\'t have a future. Doctor no more. Do you have to talk like children? What is it that makes you so ashamed of being a grown-up? Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost. Oh, the pointing again! They\'re screwdrivers! What are you going to do? Assemble a cabinet at them?',
       education: 'History sometimes gives us a terrible shock, and that is because we don\'t quite fully understand. Why should we? After all, we\'re too small to realise its final pattern. Therefore don\'t try and judge it from where you stand. It all started out as a mild curiosity in the junkyard, and now it\'s turned out to be quite a great spirit of adventure. You don\'t understand so you find excuses. As we learn about each other, so we learn about ourselves. The least important things, sometimes my dear boy, lead to the greatest discoveries.',
       price: '150 dollars'
        }
     ])

users = User.create([
  {user_first_name: 'user',
   user_last_name: 'anlen',
   user_email: 'user@gmail.com',
   user_password_digest: 'aaaaa'
   },
  {user_first_name: 'anna',
   user_last_name: 'awesome',
   user_email: 'd@gmail.com',
  user_password_digest: 'aaaaaa'
   },
   {user_first_name: 'aniece',
    user_last_name: 'Bois',
    user_email: 'tupbois@gmail.com',
   user_password_digest: 'aaaaboisboisaa'
    },
  {user_first_name: 'drakey',
   user_last_name: 'talley',
   user_email: 'drakey@gmail.com',
   user_password_digest: 'aaaaaa'
   },
  {user_first_name: 'anna',
   user_last_name: 'smith',
   user_email: 'darwin@gmail.com',
   user_password_digest: 'aaaaaa'}])

consult = Appointment.create({date: '09/02/2019', time: '01:30 PM', user_id: 1, therapist_id: 1})
consult1 = Appointment.create({date: '09/02/2020', time: '01:30 PM', user_id: 1, therapist_id: 2})
consult2 = Appointment.create({date: '09/02/2020', time: '01:30 PM', user_id: 1, therapist_id: 3})
# consult1 = Appointment.create({date: '06/02/2019', time: '01:30 PM', user_id: 3, therapist_id: 1})
# consult2 = Appointment.create({date: '05/02/2019', time: '01:30 PM', user_id: 2, therapist_id: 2})
# consult3 = Appointment.create({therapist_first_name: '', therapist_last_name: '', therapist_image: 'http://www.carmelstudiosphotography.com/wp-content/gallery/professional-headshots/Professional-Headshot-6.jpg', date: '04/27/2019', time: '01:30 PM', user_id: 1, therapist_id: 1})
# consult4 = Appointment.create({therapist_first_name: '', therapist_last_name: '', therapist_image: '', date: '05/30/2019', time: '01:30 PM', user_id: 1, therapist_id: 4})
# consult4 = Appointment.create({therapist_first_name: '', therapist_last_name: '', therapist_image: '', date: '06/28/2019', time: '11:30 AM', user_id: 1, therapist_id: 2})
# consult5 = Appointment.create({therapist_first_name: '', therapist_last_name: '', therapist_image: '', date: '06/19/2019', time: '10:30 AM', user_id: 1, therapist_id: 3})
# consult6 = Appointment.create({therapist_first_name: '', therapist_last_name: '', therapist_image: '', date: '06/02/2019', time: '01:00 PM', user_id: 1, therapist_id: 5})
