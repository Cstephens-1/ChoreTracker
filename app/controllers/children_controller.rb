class ChildrenController < ApplicationController
    def index 
        children = Child.all 
        render json: children
    end

    def create 
        child = Child.create(name: params[:name], wallet: params[:wallet])
    end

    def destroy
        user = Child.find_by(id: params[:id])
        user.destroy
    end

    private 

    def child_params
        params.permit(:name, :wallet)
    end
end
