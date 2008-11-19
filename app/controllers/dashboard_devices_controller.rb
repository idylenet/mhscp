class DashboardDevicesController < ApplicationController
  # GET /dashboard_devices
  # GET /dashboard_devices.xml
  def index
    @dashboard_devices = DashboardDevice.find(:all)

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @dashboard_devices }
    end
  end

  # GET /dashboard_devices/1
  # GET /dashboard_devices/1.xml
  def show
    @dashboard_device = DashboardDevice.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @dashboard_device }
    end
  end

  # GET /dashboard_devices/new
  # GET /dashboard_devices/new.xml
  def new
    @dashboard_device = DashboardDevice.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @dashboard_device }
    end
  end

  # GET /dashboard_devices/1/edit
  def edit
    @dashboard_device = DashboardDevice.find(params[:id])
  end

  # POST /dashboard_devices
  # POST /dashboard_devices.xml
  def create
    @dashboard_device = DashboardDevice.new(params[:dashboard_device])

    respond_to do |format|
      if @dashboard_device.save
        flash[:notice] = 'DashboardDevice was successfully created.'
        format.html { redirect_to(@dashboard_device) }
        format.xml  { render :xml => @dashboard_device, :status => :created, :location => @dashboard_device }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @dashboard_device.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /dashboard_devices/1
  # PUT /dashboard_devices/1.xml
  def update
    @dashboard_device = DashboardDevice.find(params[:id])

    respond_to do |format|
      if @dashboard_device.update_attributes(params[:dashboard_device])
        flash[:notice] = 'DashboardDevice was successfully updated.'
        format.html { redirect_to(@dashboard_device) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @dashboard_device.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /dashboard_devices/1
  # DELETE /dashboard_devices/1.xml
  def destroy
    @dashboard_device = DashboardDevice.find(params[:id])
    @dashboard_device.destroy

    respond_to do |format|
      format.html { redirect_to(dashboard_devices_url) }
      format.xml  { head :ok }
    end
  end
end
