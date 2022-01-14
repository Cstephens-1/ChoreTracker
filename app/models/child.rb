class Child < ApplicationRecord
    has_many :child_chores
    has_many :chores, through: :child_chores
    
end
