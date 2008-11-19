class DataRegisterLog < ActiveRecord::Base
  belongs_to :data_register
  belongs_to :device

  validates_presence_of :data_register_id, :device_id, :value, :message => "can't be blank"

  def unit_name
    data_register.unit.name
  end

end
