class ChoresController < ApplicationController

    def index 
        chores = Chore.all 
        render json: chores
    end

    def create 
        new_chore = Chore.create(name: params[:name], value: params[:value])
    end

    def destroy 
        chore = Chore.find_by(id: params[:id])
        chore.destroy
        head :no_content
    end

    private 

    def chores_params
        params.permit(:name, :value)
    end
end 
