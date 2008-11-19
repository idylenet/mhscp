module DeviceTypesHelper
  def fields_for_data_register(data_register, &block)
    prefix = data_register.new_record? ? 'new' : 'existing'
    fields_for("device_type[#{prefix}_data_register_attributes][]", data_register, &block)
  end

  def add_data_register_link(name) 
    link_to_function name do |page| 
      page.insert_html :bottom, :data_registers, :partial => 'data_register', :object => DataRegister.new 
    end 
  end
end
