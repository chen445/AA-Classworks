class PostsController < ApplicationController
    before_action :require_login
    
    def new
        @post= Post.new
        render :new
    end 

    def create 
        @post = current_user.posts.new(post_params)
        @post.sub_id = params[:sub_id]
        if @post.save
            redirect_to sub_url(@post.sub_id)
        else 
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end 

    def edit
        @post = current_user.posts.find_by(id: params[:id])
        if @post
            render :edit
        else 
            flash[:errors] = ['Cannot edit other user\'s posts']
            redirect_to users_url
        end
    end

    def show
        @post = current_user.posts.find_by(id: params[:id])
        render :show
    end 

    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        @post.destroy
        redirect_to user_url(current_user)
    end 

    def update
        @post = current_user.posts.find_by(id: params[:id])
        if @post.update 
            redirect_to sub_url(@post.sub_id)
        else 
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end 
    end 

    private
    def post_params
        params.require(:post).permit(:title,:url,:content)
    end 
end
