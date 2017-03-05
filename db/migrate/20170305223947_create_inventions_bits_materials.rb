class CreateInventionsBitsMaterials < ActiveRecord::Migration[5.0]
  def change
    create_table :inventions do |t|
      t.string :title
      t.text :description
      t.string :username
      t.string :email
      t.timestamps
    end
    create_table :bits do |t|
      t.text :name
    end
    create_table :materials do |t|
      t.text :name
    end
    create_table :bits_inventions do |t|
      t.belongs_to :invention, index: true
      t.belongs_to :bit, index: true
    end
    create_table :inventions_materials do |t|
      t.belongs_to :invention, index: true
      t.belongs_to :material, index: true
    end
  end
end
