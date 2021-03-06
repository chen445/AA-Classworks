class BandsController < ApplicationController
   

    def index 
        @band = Band.all
        render :index 
    end 

    def show
        @band = Band.find_by(id: params[:id])
        render :show
    end 

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to band_url
        else  
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end 
    end 

    def new
        @band = Band.new
        render :new
    end 

    def edit
        @band = Band.find_by(id: params[:id])
        render :edit
    end 

    def update
        @band = Band.find_by(id: params[:id])
        if @band.update(band_params)
            redirect_to band_url
        else 
            flash.now[:errors] = @band.errors.full_messages
            render :edit
        end 
    end 

    def destory
        @band = Band.find_by(id: params[:id])
        @band.destory
        redirect_to bands_url
    end 


    private

    def band_params
        params.require(:band).require(:name)
    end 
end
