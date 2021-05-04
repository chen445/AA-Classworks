class SubsController < ApplicationController
    before_action :require_login,only:[:edit,:update,:create,:new]
    before_action :current_user,only:[:edit,:update]
    
    def index
        @subs=Sub.all
        render :index 
    end 

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end 
   
    def new
        # @user = current_user
        @sub = Sub.new
        render :new
    end 

    def create
        @sub = Sub.new(sub_params)
        @sub.user_id = params[:user_id]
        if @sub.save
            redirect_to user_url(@sub.user_id)
        else 
            flash[:errors] = @sub.errors.full_messages
            render :new 
        end 
    end 

    def edit
        @sub = Sub.find_by(id: params[:id])
        if @current_user == @sub.moderator
            render :edit
        else 
             flash[:errors] = ["not your sub"]
             redirect_to users_url
        end 
    end 

    def update
        @sub = Sub.find_by(id: params[:id])
        if @sub.update(sub_params)
         redirect_to users_url
        else 
            flash[:errors]=@sub.errors.full_messages
            render :edit
        end 
    end 

    private

    def sub_params
        params.require(:sub).permit(:title,:description)
    end

end
