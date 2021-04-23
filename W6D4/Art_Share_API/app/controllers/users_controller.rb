class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        if params.has_key?(:name)
            users= User.where('username Like (?)', "%#{params[:name]}%")
        else 
        users = User.all
        end
        
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else 
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def update
        user = User.find_by(id: params[:id])
        if user.update(user_params)
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: "User destroyed"
    end

    private
    def user_params
        
        params.require(:user).permit(:username)
    end
end
