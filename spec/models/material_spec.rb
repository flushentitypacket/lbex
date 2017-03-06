require 'rails_helper'

RSpec.describe Material, type: :model do
  describe 'equality' do
    it 'is equal if names are equal' do
      name = 'foo'
      expect(Material.new(name: name)).to eq(Material.new(name: name))
    end
  end
end
