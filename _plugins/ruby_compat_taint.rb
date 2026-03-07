# frozen_string_literal: true

# Ruby 3.2+ removed taint/untaint.
# Older Jekyll/Liquid versions still call these methods.
class Object
  def taint
    self
  end unless method_defined?(:taint)

  def untaint
    self
  end unless method_defined?(:untaint)

  def tainted?
    false
  end unless method_defined?(:tainted?)
end
