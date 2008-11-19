class DevicesController < ApplicationController
  
  make_resourceful do
    actions :all
    
    belongs_to :area
    
    publish :json, :xml, :attributes => [
      :id, :name, :ip_address, :port, :desc,
        { :device_type => [:id, :name] },
        { :data_registers => [:id, :name, :port, :writable, :desc, {:unit => [:id, :name ]}] }
    ]
  end
  
end
