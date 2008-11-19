ActionController::Routing::Routes.draw do |map|
  map.resources :meter_types

  map.resources :dashboard_devices

  map.resources :dashboards

  
  map.resources :device_type_has_data_registers

  map.resources :data_register_logs

  map.resources :pages

  map.resources :device_types do |dt|
    dt.resources :devices, :name_prefix => 'device_type_'
  end

  map.resources :data_registers do |data_register|
    data_register.resources :data_register_logs, :name_prefix => 'data_register'
  end

  map.resources :areas do |area|
    area.resources :devices, :name_prefix => 'area_'
  end

  map.resources :devices do |device|
    device.resources :data_register_logs, :name_prefix => 'device_'
  end

  map.root :controller => 'pages'
  map.home '/', :controller => 'pages'
  map.meter_test '/meter_test', :controller => 'pages', :action => 'meter_test'
  map.help '/help', :controller => 'pages', :action => 'help'
  map.old_index '/old_index', :controller => 'pages', :action => 'old_index'

  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end

  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end

  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  # map.root :controller => "welcome"

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
