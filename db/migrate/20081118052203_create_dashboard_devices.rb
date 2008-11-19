class CreateDashboardDevices < ActiveRecord::Migration
  def self.up
    create_table :dashboard_devices do |t|
      t.references :dashboard
      t.references :device
      t.integer :order

      t.timestamps
    end
  end

  def self.down
    drop_table :dashboard_devices
  end
end
