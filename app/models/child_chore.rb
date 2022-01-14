class ChildChore < ApplicationRecord
  belongs_to :chore
  belongs_to :child
end
