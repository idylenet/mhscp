class CreateDevices < ActiveRecord::Migration
  def self.up
    create_table :devices do |t|
      t.string :name, :null => false
      t.string :ip_address, :null => false
      t.string :port, :null => true
      t.text :desc
      t.references :area, :null => false
      t.references :device_type, :null => false

      t.timestamps
    end
  end

  def self.down
    drop_table :devices
  end
end
