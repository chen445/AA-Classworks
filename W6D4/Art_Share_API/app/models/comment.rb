# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  artwork_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :artwork,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Artwork
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

     has_many :likes, :as => :likeable

     has_many :likers,
        through: :likes,
        source: :user
end
