class Material < ApplicationRecord
  has_and_belongs_to_many :inventions
  validates :name, uniqueness: true

  def ==(other)
    name == other.name
  end

  def eql?(other)
   self == other
  end
end
