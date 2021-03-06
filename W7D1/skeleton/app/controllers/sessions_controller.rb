class SessionsController < ApplicationController
    before_action :already_login,only:[:new, :create]
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
        if @user
            login(@user)
            redirect_to cats_url
        else
            render :new
        end
    end


    def destroy
        log_out
        redirect_to new_session_url
    end 


end
