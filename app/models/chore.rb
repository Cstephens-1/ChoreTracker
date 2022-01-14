class Chore < ApplicationRecord
    has_many :child_chores
    has_many :children, through: :child_chores

end
