class SessionsController < ApplicationController
    def create
        user = user.find_by_credentials(parmas[:user][:email], parmas[:user][:password])
        if user.nil?
            flash.now[:error] = ["Incorrect password/ email"]
            render :new 
        else 
            log_in_user!(user)
            redirect_to user_url 
        end
    end 

    def new
       render :new
    end 

    def destory
         log_out
         redirect_to new_session_url 
    
    end 
end
