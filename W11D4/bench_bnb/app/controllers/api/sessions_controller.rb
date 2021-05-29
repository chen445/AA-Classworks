class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def create
        debugger
       @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
        if @user.nil?
            render json: ['Invalid username or password.'], status: 422
        else
    # Log them in and redirect them if we find them
        login!(@user)
        render :show
    end

    end

    def destroy
        logout!
        render json: {}
    end 
end
