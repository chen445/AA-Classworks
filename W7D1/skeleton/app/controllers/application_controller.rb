class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def log_out
        if logged_in?
            current_user.reset_session_token
        end
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end


    def already_login
        if current_user
            redirect_to cats_url
        end 
    end 

end
