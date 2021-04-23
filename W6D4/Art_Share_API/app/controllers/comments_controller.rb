class CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        if params[:user_id]
            comments = Comment.where("user_id = #{params[:user_id]}")
        else
            comments = Comment.where("artwork_id = #{params[:artwork_id]}")
        end
        render json: comments
    end

    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else 
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        render json: "Comment destroyed"
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :user_id, :artwork_id)
    end
end
