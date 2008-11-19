class DeviceType < ActiveRecord::Base
  belongs_to :device
  has_many :device_type_data_registers
  has_many :data_registers, :through => :device_type_data_registers, :attributes => true
  
  validates_presence_of :name
  validates_associated :data_registers
  
  acts_as_lookup :name, :order => 'name ASC'
  
end
