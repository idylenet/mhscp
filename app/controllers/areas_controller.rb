class AreasController < ApplicationController

  make_resourceful do
    actions :all
    publish :json, :attributes => [:id, :name, {:devices => [:id, :name, :desc, :ip_address, :port]}]
  end
  
  # def current_object
  #   @area = Area.find_by_permalink(params[:permalink]) || Area.find(params[:permalink])
  # end
  
end
