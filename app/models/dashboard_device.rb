class DashboardDevice < ActiveRecord::Base
  belongs_to :dashboard
  belongs_to :device
end
