# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1= User.create!(username:'user1')
user2= User.create!(username:'user2')
user3= User.create!(username:'user3')
user4= User.create!(username:'user4')


artwork1= Artwork.create!(title: 'hello', image_url: 'hello.com',artist_id: 1)
artwork2= Artwork.create!(title: 'byebye', image_url: 'byebye.com',artist_id: 2)
artwork3= Artwork.create!(title: 'note', image_url: 'note.com',artist_id: 3)
artwork4= Artwork.create!(title: 'cups', image_url: 'cups.com',artist_id: 2)

artwork_shares1=ArtworkShare.create!(artwork_id: 2, viewer_id: 1)
artwork_shares2=ArtworkShare.create!(artwork_id: 3, viewer_id: 2)
artwork_shares3=ArtworkShare.create!(artwork_id: 4, viewer_id: 4)
artwork_shares4=ArtworkShare.create!(artwork_id: 1, viewer_id: 3)


