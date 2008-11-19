class DeviceTypesController < ApplicationController

  make_resourceful do 
    actions :all
    belongs_to :device
  end
  
end
