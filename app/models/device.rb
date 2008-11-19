class Device < ActiveRecord::Base
  
  belongs_to :area
  belongs_to :device_type
  
  has_many :data_register_logs
  
  validates_presence_of :name, :desc, :ip_address, :device_type_id, :area_id, #:port,
    :message => "can't be blank"
  validates_associated :device_type, :area

  acts_as_lookup :name, :order => 'name ASC'

  delegate :name, :to => :area, :prefix => true
  delegate :name, :to => :device_type, :prefix => true

  def data_registers
    @data_registers ||= device_type.data_registers
  end

end
