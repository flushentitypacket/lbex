# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170305223947) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bits", force: :cascade do |t|
    t.text "name"
  end

  create_table "inventions", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "username"
    t.string   "email"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "inventions_bits", force: :cascade do |t|
    t.integer "inventions_id"
    t.integer "bits_id"
    t.index ["bits_id"], name: "index_inventions_bits_on_bits_id", using: :btree
    t.index ["inventions_id"], name: "index_inventions_bits_on_inventions_id", using: :btree
  end

  create_table "inventions_materials", force: :cascade do |t|
    t.integer "inventions_id"
    t.integer "materials_id"
    t.index ["inventions_id"], name: "index_inventions_materials_on_inventions_id", using: :btree
    t.index ["materials_id"], name: "index_inventions_materials_on_materials_id", using: :btree
  end

  create_table "materials", force: :cascade do |t|
    t.text "name"
  end

end
