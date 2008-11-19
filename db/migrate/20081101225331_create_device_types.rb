class CreateDeviceTypes < ActiveRecord::Migration
  def self.up
    create_table :device_types do |t|
      t.string :name, :null => false
      t.text :desc
      # the data register for errors
      t.references :error_data_register

      t.timestamps
    end
  end

  def self.down
    drop_table :device_types
  end
end
