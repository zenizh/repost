class Like < ApplicationRecord
  belongs_to :likable, polymorphic: true, counter_cache: true
  belongs_to :user
end
