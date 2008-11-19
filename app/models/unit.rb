class Unit < ActiveRecord::Base
  validates_presence_of :name, :message => "can't be blank"
  
  acts_as_lookup :name, :order => 'id ASC'
end
