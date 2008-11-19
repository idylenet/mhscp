class CreateDataRegisters < ActiveRecord::Migration
  def self.up
    create_table :data_registers do |t|
      t.string :name, :null => false
      t.decimal :min_value, :precision => 10, :scale => 2
      t.decimal :max_value, :precision => 10, :scale => 2
      t.references :unit, :null => false
      t.string :register, :null => false
      t.boolean :writable, :null => false
      t.text :desc

      t.timestamps
    end
  end

  def self.down
    drop_table :data_registers
  end
end
