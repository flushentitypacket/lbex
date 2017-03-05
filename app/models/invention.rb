class Invention < ApplicationRecord
  has_and_belongs_to_many :bits
  has_and_belongs_to_many :materials
end
