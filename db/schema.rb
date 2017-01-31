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

ActiveRecord::Schema.define(version: 20170131081204) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_members", force: :cascade do |t|
    t.integer  "channel_id", null: false
    t.integer  "member_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id", "member_id"], name: "index_channel_members_on_channel_id_and_member_id", unique: true, using: :btree
    t.index ["channel_id"], name: "index_channel_members_on_channel_id", using: :btree
    t.index ["member_id"], name: "index_channel_members_on_member_id", using: :btree
  end

  create_table "channels", force: :cascade do |t|
    t.integer  "team_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id", "name"], name: "index_channels_on_team_id_and_name", unique: true, using: :btree
    t.index ["team_id"], name: "index_channels_on_team_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "member_id",  null: false
    t.text     "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_comments_on_member_id", using: :btree
    t.index ["post_id", "member_id"], name: "index_comments_on_post_id_and_member_id", using: :btree
    t.index ["post_id"], name: "index_comments_on_post_id", using: :btree
  end

  create_table "members", force: :cascade do |t|
    t.integer  "team_id",                 null: false
    t.integer  "user_id",                 null: false
    t.string   "name"
    t.string   "screen_name",             null: false
    t.integer  "role",        default: 0, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["team_id", "screen_name"], name: "index_members_on_team_id_and_screen_name", unique: true, using: :btree
    t.index ["team_id", "user_id"], name: "index_members_on_team_id_and_user_id", unique: true, using: :btree
    t.index ["team_id"], name: "index_members_on_team_id", using: :btree
    t.index ["user_id"], name: "index_members_on_user_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "member_id",              null: false
    t.text     "content",                null: false
    t.integer  "status",     default: 0, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["member_id", "status"], name: "index_posts_on_member_id_and_status", using: :btree
    t.index ["member_id"], name: "index_posts_on_member_id", using: :btree
  end

  create_table "reactions", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "member_id",  null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_reactions_on_member_id", using: :btree
    t.index ["post_id", "member_id", "name"], name: "index_reactions_on_post_id_and_member_id_and_name", unique: true, using: :btree
    t.index ["post_id", "name"], name: "index_reactions_on_post_id_and_name", using: :btree
    t.index ["post_id"], name: "index_reactions_on_post_id", using: :btree
  end

  create_table "services", force: :cascade do |t|
    t.integer  "team_id",                      null: false
    t.string   "type",                         null: false
    t.string   "webhook_url",                  null: false
    t.string   "channel"
    t.boolean  "on_posted",    default: false, null: false
    t.boolean  "on_commented", default: false, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["team_id"], name: "index_services_on_team_id", using: :btree
  end

  create_table "stocks", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "member_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_stocks_on_member_id", using: :btree
    t.index ["post_id", "member_id"], name: "index_stocks_on_post_id_and_member_id", unique: true, using: :btree
    t.index ["post_id"], name: "index_stocks_on_post_id", using: :btree
  end

  create_table "teams", force: :cascade do |t|
    t.string   "domain",                 null: false
    t.string   "name"
    t.integer  "status",     default: 0, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["domain"], name: "index_teams_on_domain", unique: true, using: :btree
  end

  create_table "templates", force: :cascade do |t|
    t.integer  "member_id",  null: false
    t.string   "name"
    t.text     "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_templates_on_member_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",            null: false
    t.string   "crypted_password"
    t.string   "salt"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  add_foreign_key "channel_members", "channels"
  add_foreign_key "channel_members", "members"
  add_foreign_key "channels", "teams"
  add_foreign_key "comments", "members"
  add_foreign_key "comments", "posts"
  add_foreign_key "members", "teams"
  add_foreign_key "members", "users"
  add_foreign_key "posts", "members"
  add_foreign_key "reactions", "members"
  add_foreign_key "reactions", "posts"
  add_foreign_key "services", "teams"
  add_foreign_key "stocks", "members"
  add_foreign_key "stocks", "posts"
  add_foreign_key "templates", "members"
end
