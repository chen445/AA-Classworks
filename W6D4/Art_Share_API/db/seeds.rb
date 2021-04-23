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
Comment.destroy_all
Like.destroy_all

user1= User.create!(username:'user1')
user2= User.create!(username:'user2')
user3= User.create!(username:'user3')
user4= User.create!(username:'user4')


artwork1= Artwork.create!(title: 'hello', image_url: 'hello.com',artist_id: user1.id, favorite: true)
artwork2= Artwork.create!(title: 'byebye', image_url: 'byebye.com',artist_id: user2.id)
artwork3= Artwork.create!(title: 'note', image_url: 'note.com',artist_id: user3.id, favorite: true)
artwork4= Artwork.create!(title: 'cups', image_url: 'cups.com',artist_id: user2.id)

artwork_shares1=ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: user1.id)
artwork_shares2=ArtworkShare.create!(artwork_id: artwork3.id, viewer_id: user2.id)
artwork_shares3=ArtworkShare.create!(artwork_id: artwork4.id, viewer_id: user4.id)
artwork_shares4=ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: user3.id)

comment1 = Comment.create!(body: "Great picture", artwork_id: artwork1.id , user_id: user2.id)
comment2 = Comment.create!(body: "Bad picture", artwork_id: artwork2.id , user_id: user1.id)
comment3 = Comment.create!(body: "wow", artwork_id: artwork3.id , user_id: user4.id)
comment4 = Comment.create!(body: "okay picture", artwork_id: artwork1.id , user_id: user2.id)




like1 = Like.create!(user_id: user1.id, likeable_type: 'Artwork', likeable_id: artwork1.id)
like1 = Like.create!(user_id: user2.id, likeable_type: 'Comment', likeable_id: comment1.id)
like1 = Like.create!(user_id: user3.id, likeable_type: 'Artwork', likeable_id: artwork3.id)
like1 = Like.create!(user_id: user4.id, likeable_type: 'Comment', likeable_id: comment2.id)



