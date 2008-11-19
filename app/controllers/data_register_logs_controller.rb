class DataRegisterLogsController < ApplicationController
  make_resourceful do 
    actions :all
    belongs_to :device
    
    publish :json, :xml, :attributes => [
        :id, :value, 
        # {:device => [:id, :name, :desc, :ip_address, :port]},
        {:data_register => [:id, :name, :port, :writable, :desc, {:unit => [:id, :name]}]}
      ]
  end  
  
end
