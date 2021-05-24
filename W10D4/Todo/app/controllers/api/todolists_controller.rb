class Api::TodolistsController < ApplicationController
    def show 
        render json: Todolist.find(params[:id])
    end

    def index
        @todos = Todolist.all
        render json: @todos
    end

    def create
        @todo = Todolist.new(todolist_params)
        if @todo.save
          render json: @todo
        else
          render json: @todo.errors.full_messages, status: 422
        end
    end

    def update
        @todo = Todolist.find(params[:id])
        if @todo.update && @todo
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = Todolist.find(params[:id])
        if @todo.destroy && @todo
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    private

    def todolist_params
        params.require(:todolist).permit(:title, :body, :done)
    end
end
