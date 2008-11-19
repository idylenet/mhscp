class CreateUnits < ActiveRecord::Migration
  def self.up
    create_table :units do |t|
      t.string :name, :null => false
      t.string :shorthand
      t.text :desc

      t.timestamps
    end
    
    # create our default data types
    Unit.create :name => 'Numeric'
    Unit.create :name => 'Hexadecimal', :shorthand => 'h'
    Unit.create :name => 'Binary', :shorthand => 'b'
    Unit.create :name => 'String'
    Unit.create :name => 'Percentage', :shorthand => '%'
    Unit.create :name => 'Amps', :shorthand => 'A'
    Unit.create :name => 'Volts', :shorthand => 'V'
    Unit.create :name => 'PSI'
    Unit.create :name => 'RPM'
    Unit.create :name => 'Hertz', :shorthand => 'Hz'
    Unit.create :name => 'Time'
    Unit.create :name => 'Hours', :shorthand => 'hrs'
    Unit.create :name => 'Minutes', :shorthand => 'mins'
    Unit.create :name => 'Seconds', :shorthand => 'secs'
    Unit.create :name => 'Date'
    Unit.create :name => 'Degrees(F)', :shorthand => 'F'
    Unit.create :name => 'Degrees(C)', :shorthand => 'C'
    # Unit.create :name => 'CUSTOM'
    
  end

  def self.down
    drop_table :units
  end
end
