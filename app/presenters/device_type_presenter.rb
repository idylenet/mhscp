class DeviceTypePresenter < Presenter
  
  composed_of :name, :desc, :from => :device_type, :prefixed => true
  composed_of :name, :unit, :port, :writable, :desc, :from => :data_registers, :prefixed => true
  
  include_errors_for :device_type
  include_errors_for :data_registers
  
  def initialize
    @device_type = DeviceType.new
    @data_registers = [DataRegister.new]
    super
  end
  
  def units
    @units = @units || Unit.find(:all)
  end
  
  # def valid?
  #     @device_type.valid? && @data_registers.each {|reg| reg.valid? }
  #   end
  
end