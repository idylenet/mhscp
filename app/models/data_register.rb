class DataRegister < ActiveRecord::Base
  has_many :device_type_data_registers
  has_one :device_type, :through => :device_type_data_registers
  belongs_to :unit
  
  validates_presence_of :name, :unit_id, :register, :desc
  
  acts_as_lookup :name, :order => 'id ASC'
  
  delegate :name, :to => :unit, :prefix => true
  delegate :name, :to => :device_type, :prefix => true
  
  def full_name
    device_type_name + '::' + name
  end
  
end
