class UsersController < ApplicationController
    def index
        users = User.all

        render json: users
    end

    def create
        user = User.new(params.require(:user).permit(:name, :email))
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def update
        user = User.find_by(id: params[:id])
        if user.update(params.require(:user).permit(:name, :email))
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: "User destroyed"
    end
    
end