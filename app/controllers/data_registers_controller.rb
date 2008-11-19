class DataRegistersController < ApplicationController
  make_resourceful do
    actions :all
    belongs_to :device_type
    
    publish :json, :xml, :attributes => [
        :id, :name, :port, :writable, :desc, {:unit => [:id, :name]}
      ]
    
  end
end
