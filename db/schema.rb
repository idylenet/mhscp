# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20081118053221) do

  create_table "areas", :force => true do |t|
    t.string   "name",       :null => false
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dashboard_devices", :force => true do |t|
    t.integer  "dashboard_id"
    t.integer  "device_id"
    t.integer  "order"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dashboards", :force => true do |t|
    t.string   "name"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "data_register_logs", :force => true do |t|
    t.integer  "device_id",        :null => false
    t.integer  "data_register_id", :null => false
    t.string   "value",            :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "data_registers", :force => true do |t|
    t.string   "name",                                      :null => false
    t.decimal  "min_value",  :precision => 10, :scale => 2
    t.decimal  "max_value",  :precision => 10, :scale => 2
    t.integer  "unit_id",                                   :null => false
    t.string   "register",                                  :null => false
    t.boolean  "writable",                                  :null => false
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "device_type_data_registers", :force => true do |t|
    t.integer  "device_type_id",   :null => false
    t.integer  "data_register_id", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "device_types", :force => true do |t|
    t.string   "name",                   :null => false
    t.text     "desc"
    t.integer  "error_data_register_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "devices", :force => true do |t|
    t.string   "name",           :null => false
    t.string   "ip_address",     :null => false
    t.string   "port"
    t.text     "desc"
    t.integer  "area_id",        :null => false
    t.integer  "device_type_id", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "meter_types", :force => true do |t|
    t.string   "name"
    t.text     "desc"
    t.string   "class"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pages", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "units", :force => true do |t|
    t.string   "name",       :null => false
    t.string   "shorthand"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
