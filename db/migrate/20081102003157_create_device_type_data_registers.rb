class CreateDeviceTypeDataRegisters < ActiveRecord::Migration
  def self.up
    create_table :device_type_data_registers do |t|
      t.references :device_type, :null => false
      t.references :data_register, :null => false

      t.timestamps
    end
  end

  def self.down
    drop_table :device_type_data_registers
  end
end
