class User < ApplicationRecord
    validates :user_name,:password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password,length:{minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token

    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def password
        @password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def self.find_by_credentials(user_name, password)
        user= User.find_by(user_name: user_name)
        if user && user.is_password?(password)
            return user
        else 
            return nil
        end 
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end 
    
end
