class ArtworksController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        if params[:user_id]
            artworks = Artwork
            .joins(:artwork_shares)
            .where("artworks.artist_id = #{params[:user_id]} OR artwork_shares.viewer_id = #{params[:user_id]}")
            render json: artworks

        else
            artworks = Artwork.all
            render json: artworks
        end
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else 
            render json: artwork.errors.full_messages, status: 422
        end
    end

    def show
        artwork = Artwork.find_by(id: params[:id])
        render json: artwork
    end

    def update
        artwork = Artwork.find_by(id: params[:id])
        if artwork.update(artwork_params)
            redirect_to "/artworks/#{artwork.id}"
        else
            render json: artwork.errors.full_messages, status: 422
        end
    end

    def destroy
        artwork = Artwork.find_by(id: params[:id])
        artwork.destroy
        render json: "Artwork destroyed"
    end

    def favorite
        
        favorite = Artwork.where("favorite = true")
        render json: favorite
    end

    def like
        puts params
        likes = Like.new( user_id: params[:user_id], likeable_type: "Artwork", likeable_id: params[:id])
        if likes.save
            render json: likes
        else
            render json: likes.errors.full_messages, status: 422
        end

    end

private
    def artwork_params
        
        params.require(:artwork).permit(:title, :image_url, :artist_id)

    end
end
