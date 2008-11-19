class DeviceTypeDataRegister < ActiveRecord::Base
  validates_presence_of :device_type, :data_register, :message => "can't be blank"

  belongs_to :device_type
  belongs_to :data_register
end
