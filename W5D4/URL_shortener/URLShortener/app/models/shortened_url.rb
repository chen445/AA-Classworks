# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

require "base64"

class ShortenedUrl < ApplicationRecord
    validates :user_id, :short_url, presence: true, uniqueness: true
    validates :long_url, presence: true

    def self.random_code
        #instance.random -> random string
        random = SecureRandom.urlsafe_base64(16)
        while shortened_urls.exist?(random) 
            random = SecureRandom.urlsafe_base64(16)
        end
        random 
    end
    # while empty?
    # while exist? (true)
    # until (false) -> true = breaks

end

class SecureRandom

    def self.urlsafe_base64
        
    end


end
