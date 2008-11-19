class Area < ActiveRecord::Base
  has_many :devices
  acts_as_lookup :name, :order => 'name ASC'

  validates_presence_of :name, :on => :create, :message => "can't be blank"

  # ensure our name field is url friendly for permalink urls
  # def to_param 
  #     "#{name.gsub(/[^a-z0-9]+/i, '-')}" if self.name 
  #   end 

end
