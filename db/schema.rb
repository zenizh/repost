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

ActiveRecord::Schema.define(version: 20170608011009) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_users", id: :serial, force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id", "user_id"], name: "index_channel_users_on_channel_id_and_user_id", unique: true
    t.index ["channel_id"], name: "index_channel_users_on_channel_id"
    t.index ["user_id"], name: "index_channel_users_on_user_id"
  end

  create_table "channels", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_channels_on_name", unique: true
  end

  create_table "comments", id: :serial, force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "user_id"], name: "index_comments_on_post_id_and_user_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "posts", id: :serial, force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "content", null: false
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "status"], name: "index_posts_on_user_id_and_status"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "reactions", id: :serial, force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "name"], name: "index_reactions_on_post_id_and_name"
    t.index ["post_id", "user_id", "name"], name: "index_reactions_on_post_id_and_user_id_and_name", unique: true
    t.index ["post_id"], name: "index_reactions_on_post_id"
    t.index ["user_id"], name: "index_reactions_on_user_id"
  end

  create_table "services", id: :serial, force: :cascade do |t|
    t.string "type", null: false
    t.string "webhook_url", null: false
    t.string "channel"
    t.boolean "on_post", default: false, null: false
    t.boolean "on_comment", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stars", id: :serial, force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "user_id"], name: "index_stars_on_post_id_and_user_id", unique: true
    t.index ["post_id"], name: "index_stars_on_post_id"
    t.index ["user_id"], name: "index_stars_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "templates", id: :serial, force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name"
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_templates_on_user_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", null: false
    t.string "crypted_password"
    t.string "salt"
    t.string "token"
    t.string "name"
    t.string "screen_name", null: false
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email", "token"], name: "index_users_on_email_and_token"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["screen_name"], name: "index_users_on_screen_name", unique: true
  end

  add_foreign_key "channel_users", "channels"
  add_foreign_key "channel_users", "users"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "posts", "users"
  add_foreign_key "reactions", "posts"
  add_foreign_key "reactions", "users"
  add_foreign_key "stars", "posts"
  add_foreign_key "stars", "users"
  add_foreign_key "templates", "users"
end
