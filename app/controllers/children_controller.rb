class ChildrenController < ApplicationController
    def index 
        children = Child.all 
        render json: children
    end
end
