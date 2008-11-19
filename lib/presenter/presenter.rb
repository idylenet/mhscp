class Presenter
  extend Forwardable
  include Validatable

  class << self
    def composed_of(*args)
      options = args.pop
      model = options[:from]
      prefixed = options[:prefixed]
      attributes = args.map{ |attr| [attr.to_s, "#{attr}="] }.flatten

      attr_accessor model
      if prefixed
        prefixed_map = create_prefixed_map(model, attributes)
        include_errors_from(model, :map => prefixed_map)
        def_delegators_by_map(model, prefixed_map)
      else
        include_errors_from(model)
        def_delegators(model, *attributes)
      end
    end

    def create_prefixed_map(model, attributes)
      map = Hash.new
      attributes.each do |attr|
        map[attr.to_sym] = ("#{model}" + '_' + "#{attr}").to_sym
      end
      return map
    end

    def def_delegators_by_map(model, map)
      map.each do |origin, delegator|
        def_delegator model, origin, delegator
      end
    end
  end

  def initialize(params=nil)
    params.each_pair do |attribute, value|
      self.send :"#{attribute}=", value
    end unless params.nil?
  end
end
