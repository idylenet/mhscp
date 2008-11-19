class CreateDataRegisterLogs < ActiveRecord::Migration
  def self.up
    create_table :data_register_logs do |t|
      
      t.references :device, :null => false
      t.references :data_register, :null => false
      t.string :value, :null => false

      t.timestamps
    end
  end

  def self.down
    drop_table :data_register_logs
  end
end
