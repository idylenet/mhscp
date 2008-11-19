class CreateAreas < ActiveRecord::Migration
  def self.up
    create_table :areas do |t|
      t.string :name, :null => false
      t.text :desc

      t.timestamps
    end
  end

  def self.down
    drop_table :areas
  end
end
